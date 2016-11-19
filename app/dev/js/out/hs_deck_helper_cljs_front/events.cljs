(ns hs-deck-helper-cljs-front.events
  (:require
   [re-frame.core :refer [reg-event-db after]]
   [common.logger :as logger]
   [hs-deck-helper-cljs-front.db :as db :refer [app-db]]))


(defn get-current-match [db]
  (select-keys db [:friendly-play :friendly-draw :opposing-play]))


(reg-event-db
 :initialize-db
 (fn [_ _]
   (logger/info "Initializing db" app-db)
   app-db))

(reg-event-db
 :match-end
 (fn [db [_ won]]
   (logger/info "Match end event")
   (let [win-recorded (if won
                        (assoc app-db :wins (inc (:wins db)))
                        (assoc app-db :loses (inc (:loses db))))]
     (assoc win-recorded :old-matches (conj (:old-matches db) (get-current-match db))))
   ))

(reg-event-db
 :friendly-play
 (fn [db [_ card]]
   (logger/info "Friendly play event" card)
   (assoc db :friendly-play (conj (:friendly-play db) card))))

(reg-event-db
 :friendly-draw
 (fn [db [_ card]]
   (logger/info "Friendly draw event" card)
   (assoc db :friendly-draw (conj (:friendly-draw db) card))))

(reg-event-db
 :opposing-play
 (fn [db [_ card]]
   (logger/info "Opposing play event" card)
   (assoc db :opposing-play (conj (:opposing-play db) card)
          )))

(reg-event-db
 :current-player
 (fn [db [_ player]]
   (logger/info "current player event" player)
   (assoc db :current-player player)))
