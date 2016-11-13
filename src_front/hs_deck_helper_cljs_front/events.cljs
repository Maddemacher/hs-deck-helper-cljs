(ns hs-deck-helper-cljs-front.events
  (:require
   [re-frame.core :refer [reg-event-db after]]
   [hs-deck-helper-cljs-front.db :as db :refer [app-db]]))


(reg-event-db
 :initialize-db
 (fn [_ _] app-db))


(reg-event-db
 :open-beer
 (fn [db [_ _]]
   (assoc db :beer-count (inc (:beer-count db)))))


(reg-event-db
 :friendly-play
 (fn [db [_ card]]
   (js/console.log "Friendly play event" db " " card)
   (assoc db :friendly-play (conj (:friendly-play db) card))))

(reg-event-db
 :friendly-draw
 (fn [db [_ card]]
   (assoc db :friendly-draw (conj (:friendly-draw db) card))))

(reg-event-db
 :opponent-play
 (fn [db [_ card]]
   (assoc db :opponent-play (conj (:opponent-play db) card))))
