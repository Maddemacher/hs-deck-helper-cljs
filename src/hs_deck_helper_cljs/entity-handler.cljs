(ns hs-deck-helper-cljs.entity-handler)

(defn get-card-id [line]
  (apply str (drop 7 (re-find #"CardID=\S+" line))))

(defn get-zone [line]
  (apply str (drop 5 (re-find #"zone=\S+" line))))

(defn get-show-entity-data [line]
  {:card-id (get-card-id line) :zone (get-zone line)})
