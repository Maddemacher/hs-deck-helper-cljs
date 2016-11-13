(ns hs-deck-helper-cljs-front.subs
  (:require [re-frame.core :refer [reg-sub]]))


(reg-sub
  :get-beer-count
  (fn [db _]
    (:beer-count db)))

(reg-sub
 :get-friendly-play
 (fn  [db _]
   (js/console.log "Getting friently play " db)
   (:friendly-play db)))

(reg-sub
 :get-friendly-draw
 (fn [db _]
   (:friendly-draw db)))

(reg-sub
 :get-opponent-play
 (fn [db _]
   (:opponent-play db)))
