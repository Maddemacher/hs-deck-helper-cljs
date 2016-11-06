(ns hs-deck-helper-cljs.ipc
  (:require [cljs.nodejs :as nodejs]))


(def electron (nodejs/require "electron"))

(def ipcMain (.-ipcMain electron))

(defn setup-listeners []
  (js/console.log "Setting up IPC listeners")

  (.on ipcMain "synchronous-message"
       (fn [event, arg]
         (js/console.log "got synchronous message " arg)
         (set! (.-returnValue event) "pong")))

  (.on ipcMain "asynchronous-message"
              (fn [event, arg]
                (js/console.log (str "got asynchronous message " arg)))))

(defn send-message-sync [msg]
  (js/console.log "sending synchronous message to renderer")
  (.sendSync ipcMain "synchronous-message" msg))

(defn send-message-async [msg]
  (js/console.log "sending asynchronous message to renderer")
  (.send ipcMain "asynchronous-message" msg))
