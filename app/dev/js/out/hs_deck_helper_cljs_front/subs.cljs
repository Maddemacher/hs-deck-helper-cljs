(ns hs-deck-helper-cljs-front.subs
  (:require [re-frame.core :refer [reg-sub]]
            [common.logger :as logger]))

(reg-sub
 :get-friendly-play
 (fn  [db _]
   (logger/info "Getting friently play" db)
   (:friendly-play db)))

(reg-sub
 :get-friendly-draw
 (fn [db _]
   (logger/info "Getting friendly draw" db)
   (:friendly-draw db)))

(reg-sub
 :get-opposing-play
 (fn [db _]
   (logger/info "Getting opposing play" db)
   (:opposing-play db)))
