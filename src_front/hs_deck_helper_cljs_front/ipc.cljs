(ns hs-deck-helper-cljs-front.ipc
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch dispatch-sync]]
            [common.logger :as logger]))

(def electron (js/require "electron"))

(def ipcRenderer (.-ipcRenderer electron))

(defn setup-listeners []
  (logger/info "Setting up IPC listeners")

  (.on ipcRenderer "friendly-play"
       (fn [event, card]
         (logger/info "Friendly play event from backend" card)
         (re-frame/dispatch [:friendly-play card])))

  (.on ipcRenderer "friendly-draw"
       (fn [event, card]
         (logger/info "Friendly draw event from backend" card)
         (re-frame/dispatch [:friendly-draw card])))

  (.on ipcRenderer "opposing-play"
       (fn [event card]
         (logger/info "Opposing play event from backend" card)
         (re-frame/dispatch [:opposing-play card]))))
