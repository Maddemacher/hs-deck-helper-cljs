(ns hs-deck-helper-cljs.reader
  (:require [cljs.nodejs :as nodejs]
            [common.logger :as logger]
            [hs-deck-helper-cljs.events :as events]
            [clojure.string :as str]))

(def tail (.-Tail (nodejs/require "tail")))
(def fs (nodejs/require "fs"))
(def path (nodejs/require "path"))

(defonce tailer (atom nil))

(defn get-files [folder-path]
  (.readdirSync fs folder-path))

(defn get-full-paths [folder-path]
  (map #(.join path folder-path %) (get-files folder-path)))

(defn get-file-stats [path]
  (clj->js {:path path :stats (js->clj (.statSync fs path))}))

(defn read-folder-file-stats [folder-path]
  (map get-file-stats (get-full-paths folder-path)))

(defn get-latest-logfile [folder-path]
  (apply max-key #(.getTime (.-ctime (.-stats %))) (read-folder-file-stats folder-path)))

(defn setup-file-tailer [folder-path]
  (when (some? @tailer) (.unwatch @tailer))
  (let [latest-log-file (get-latest-logfile folder-path)
        file-tailer (new tail (.-path latest-log-file) (clj->js {:fromBeginning false :follow true :logger js/console}))]
    (.on file-tailer "line"
         (fn [data]
           (events/on-new-line (str/replace data (re-pattern #"^\d{4}-\d{2}-\d{2} .+PowerTaskList.DebugPrintPower\(\) - ") ""))))

    (.on file-tailer "error" #(logger/error %))

    (.watch file-tailer)

    (reset! tailer file-tailer)))
