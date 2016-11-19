(ns hs-deck-helper-cljs.ipc
  (:require [cljs.nodejs :as nodejs]
            [common.logger :as logger]))

(def electron (nodejs/require "electron"))

(defonce browserWindow (atom nil))

(def ipcMain (.-ipcMain electron))

(defn send-message [topic message]
  (logger/info "Sending message on topic: " topic " message " message)
  (.send (.-webContents @browserWindow) topic message))


(defn setup-listeners [window]
  (logger/info "Setting up IPC listeners " window)
  (logger/info "Contents " (.-webContents window))
  (reset! browserWindow window))

(defn send-friendly-play [card]
  (send-message "friendly-play" card))


(defn send-opponenet-play [card]
  (send-message "opposing-play" card))


(defn send-friendly-draw [card]
  (send-message "friendly-draw" card))


(defn send-match-end []
  (send-message "match-end"))
