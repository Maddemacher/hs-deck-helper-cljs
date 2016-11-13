(ns hs-deck-helper-cljs.ipc
  (:require [cljs.nodejs :as nodejs]))

(def electron (nodejs/require "electron"))

(defonce browserWindow (atom nil))

(def ipcMain (.-ipcMain electron))

(defn send-message [topic message]
  (js/console.log "Sending message on topic: " topic " message " message)
  (.send (.-webContents @browserWindow) topic message))


(defn setup-listeners [window]
  (js/console.log "Setting up IPC listeners " window)
  (js/console.log "Contents " (.-webContents window))
  (reset! browserWindow window))

(defn send-friendly-play [card]
  (send-message "friendly-play" card))

(defn send-opponenet-play [card]
  (.send ipcMain "opponent-play" card))

(defn send-friendly-draw [card]
  (.send ipcMain "friendly-draw" card))
