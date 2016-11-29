(ns hs-deck-helper-cljs.entity-handler
  (:require [hs-deck-helper-cljs.parsers :as parsers]))

(defn get-card-id [line]
  (apply str (drop 7 (re-find #"CardID=\S+" line))))

(defn get-tags [line]
  (let [p #"tag=.+?value=\S+"]
    (apply merge (mapv #(hash-map (keyword (.toLowerCase (parsers/get-tag %))) (parsers/get-value %)) (re-seq p line)))))

(defn get-show-entity-data [line]
  (merge (get-tags line) {:entity (parsers/get-entity line)
                          :cardid (get-card-id line)
                          }))


(defn get-full-entity-data [line]
  (merge (get-tags line) {:cardid (get-card-id line)}))
