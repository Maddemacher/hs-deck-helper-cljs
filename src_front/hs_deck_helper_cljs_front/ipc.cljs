(ns hs-deck-helper-cljs-front.ipc
  )

(def electron (js/require "electron"))

(def ipcRenderer (.-ipcRenderer electron))

(defn setup-listeners []
  (.on ipcRenderer "synchronous-message"
              (fn [event, arg] (println arg)))
  (.on ipcRenderer "asynchronous-message"
              (fn [event, arg] (println arg))))

(defn send-message-sync [msg]
  (js/console.log "sending sync message to main")
  (.sendSync ipcRenderer "synchronous-message" msg))

(defn send-message-async [msg]
  (js/console.log "sending async message to main")
  (.send ipcRenderer "asynchronous-message" msg))
