(ns hs-deck-helper-cljs-front.ipc
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch dispatch-sync]]))

(def electron (js/require "electron"))

(def ipcRenderer (.-ipcRenderer electron))

(defn setup-listeners []
  (.on ipcRenderer "friendly-play"
       (fn [event, card]
         (println "new card played" card)
         (re-frame/dispatch [:friendly-play card])))

  (.on ipcRenderer "friendly-draw"
       (fn [event, card]
         (println "new card drawn" card)
         (re-frame/dispatch [:friendly-draw card])))

  (.on ipcRenderer "oponent-play"
       (fn [event card]
         (printn "opponenet played card " card)
         (re-frame/dispatch [:opponent-play card]))))
