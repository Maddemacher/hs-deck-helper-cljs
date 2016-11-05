(ns hs-deck-helper-cljs-front.reader
  (:require [re-frame.core :as re-frame]))

(defonce watcher (atom nil))

(defn setup-file-watcher [path]
  (when (some? @watcher) (js/clearInterval @watcher))
  (reset! watcher (js/setInterval #(re-frame/dispatch [:open-beer]) 1000)))
