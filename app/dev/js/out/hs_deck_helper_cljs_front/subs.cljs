(ns hs-deck-helper-cljs-front.subs
  (:require [re-frame.core :refer [reg-sub]]
            [common.logger :as logger]))

(reg-sub
 :get-friendly-play
 (fn  [db _]
   (logger/info "Getting friently play")
   (:friendly-play db)))


(reg-sub
 :get-friendly-draw
 (fn [db _]
   (logger/info "Getting friendly draw")
   (:friendly-draw db)))


(reg-sub
 :get-opposing-play
 (fn [db _]
   (logger/info "Getting opposing play")
   (:opposing-play db)))


(reg-sub
 :get-old-matches
 (fn [db _]
   (logger/info "Getting old matches" db)
   {:matches (:old-matches db) :wins (:wins db) :loses (:loses db)}))

(reg-sub
 :get-current-player
 (fn [db _]
   (logger/info "Getting current player")
   (:current-player db)))
