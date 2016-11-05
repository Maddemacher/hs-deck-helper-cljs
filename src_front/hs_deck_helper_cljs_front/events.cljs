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
