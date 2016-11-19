(ns hs-deck-helper-cljs.events
  (:require [hs-deck-helper-cljs.ipc :as ipc]
            [common.logger :as logger]
            [hs-deck-helper-cljs.tag-handler :as tag-handler]
            [hs-deck-helper-cljs.block-handler :as block-handler]
            [hs-deck-helper-cljs.resources :as resources]
            [hs-deck-helper-cljs.regexps :as regexps]))

(defonce block-buffer-init {:appending false :content [] :tag-count 0})
(defonce block-buffer (atom block-buffer-init))

(defn is-block-end-tag [line]
  (re-find regexps/block-end-tag line))

(defn is-block-start-tag [line]
  (re-find regexps/block-start-tag line))



(defn on-friendly-play [card]
  (logger/info "Friendly play " (clj->js card))
  (ipc/send-friendly-play (clj->js card)))


(defn on-friendly-draw [card]
  (logger/info "Friendly draw " (clj->js card))
  (ipc/send-friendly-draw (clj->js card)))


(defn on-opposing-play [card]
  (logger/info "Opposing play " (clj->js card))
  (ipc/send-opponenet-play (clj->js card)))

(defn on-new-line [line]
  (when (is-block-start-tag line)
    (do (swap! block-buffer assoc :appending true)
        (swap! block-buffer update-in [:tag-count] inc)))


  (when (:appending @block-buffer) (swap! block-buffer update-in [:content] conj {:data line :level (:tag-count @block-buffer)}))


  (when (is-block-end-tag line)
    (do (swap! block-buffer update-in [:tag-count] dec)
        (when (= 0 (:tag-count @block-buffer))
          (do (block-handler/handle-block @block-buffer)
              (reset! block-buffer block-buffer-init)))))


  (when-not (:appending @block-buffer)
    (condp re-find line
      regexps/friendly-draw (on-friendly-draw (resources/get-card line))
      regexps/friendly-play (on-friendly-play (resources/get-card line))
      regexps/opposing-play (on-opposing-play (resources/get-card line))
      regexps/tag-change    (tag-handler/handle-tag-change line)
      (logger/info "No action on line: " line))))
