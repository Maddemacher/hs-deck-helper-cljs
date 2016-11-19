(ns hs-deck-helper-cljs.resources
  (:require [cljs.nodejs :as nodejs]
            [hs-deck-helper-cljs.cards :as cards]
            [common.logger :as logger]
            [hs-deck-helper-cljs.regexps :as regexps]))


(defn get-id [line]
  (apply str (drop 7 (re-find regexps/card-id line))))

(defn get-card [line]
  (let [card-id (get-id line)]
    (logger/info "card id " card-id)
    (some #(when (= (:id %) card-id) %) cards/cards)))
