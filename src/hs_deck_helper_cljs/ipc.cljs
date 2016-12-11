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

(defn send-match-end [won]
  (logget/info "Sending match end, won: " won)
  (send-message "match-end" won))

(defn send-game-won []
  (send-match-end true))

(defn send-game-lost []
  (send-match-end false))

(defn send-current-player [player]
  (logger/info "sending current player" player)
  (send-message "current-player" player))

(defn send-card-drawn [card-tag]
  (logger/info"sending card drawn" card-tag)
  (send-message "card-drawn" card-tag))

(defn send-card-played [card-tag]
  (logger/info "sendingin card played" card-tag)
  (send-message "card-played" card-tag))
