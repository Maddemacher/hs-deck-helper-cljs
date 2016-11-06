(ns hs-deck-helper-cljs.events
  (:require [hs-deck-helper-cljs.ipc :as ipc]))


(defn on-new-line [line]
  (js/console.log (str  "New line: " line)))
