(ns hs-deck-helper-cljs.tag-handler
  (:require [clojure.string :as str]
            [common.logger :as logger]
            [hs-deck-helper-cljs.ipc :as ipc]))

(defn handle-tag-change [line]
  (logger/tag "in handle tag" line)
  (cond
    (str/includes? line "Entity=Madde tag=PLAYSTATE value=WON") (ipc/send-game-won)

    (str/includes? line "Entity=Madde tag=PLAYSTATE value=LOST") (ipc/send-game-lost)
    :else nil))


(defn get-entity [line]
  (let [array-based (apply str (drop 7 (re-find #"Entity=\[.+\]" line)))
        single (apply str (drop 7 (re-find #"Entity=\S+" line)))]
    (if (> array-based single)
      array-based
      single)))

(defn get-tag [line]
  (apply str (drop 4 (re-find #"tag=\S+" line))))

(defn get-value [line]
  (let [value (apply str (drop 6 (re-find #"value=\S+" line)))]
    (cond
      (not (js/isNaN value)) (js/Number value)
      :else value)))

(defn get-block-type [line]
  (apply str (drop 10 (re-find #"BlockType=\S+" line))))

(defn get-tag-data [line]
  {:entity (get-entity line) (keyword (get-tag line)) (get-value line)})
