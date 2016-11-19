(ns hs-deck-helper-cljs.events
  (:require [hs-deck-helper-cljs.ipc :as ipc]
            [common.logger :as logger]
            [hs-deck-helper-cljs.resources :as resources]
            [hs-deck-helper-cljs.regexps :as regexps]))


(defn on-friendly-play [card]
  (logger/info "Friendly play " (clj->js card))
  (ipc/send-friendly-play (clj->js card)))


(defn on-friendly-draw [card]
  (logger/info "Friendly draw " (clj->js card))
  (ipc/send-friendly-draw (clj->js card)))


(defn on-opposing-play [card]
  (logger/info "Opposing play " (clj->js card))
  (ipc/send-opponenet-play (clj->js card)))

(defn on-match-end []
  (logger/info "Match ended")
  (ipc/send-match-end))

(defn on-new-line [line]
  (condp re-find line
        regexps/friendly-draw (on-friendly-draw (resources/get-card line))
        regexps/friendly-play (on-friendly-play (resources/get-card line))
        regexps/opposing-play (on-opposing-play (resources/get-card line))
        regexps/match-end     (on-match-end)
        (logger/info "No action on line: " line)))
