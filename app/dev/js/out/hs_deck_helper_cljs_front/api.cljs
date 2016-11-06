(ns hs-deck-helper-cljs-front.api)

(def fs (js/require "fs"))
(def path (js/require "path"))

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
