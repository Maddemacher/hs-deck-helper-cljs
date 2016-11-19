(ns hs-deck-helper-cljs.block-handler
  (:require [common.logger :as logger]
            [clojure.string :as str]
            [hs-deck-helper-cljs.tag-handler :as tag-handler]
            [hs-deck-helper-cljs.entity-handler :as entity-handler]
            [hs-deck-helper-cljs.ipc :as ipc]
            [hs-deck-helper-cljs.regexps :as regexps]))


(def base-block {:type ""
                 :entity ""
                 :tags []
                 :blocks []
                 :shown-entities []})


(defn get-block-data [content]
  (let [
        block-data (atom base-block)
        block-head (first content)
        block-head-level (:level block-head)

        lines (rest content)
        ]


    (swap! block-data assoc :type (tag-handler/get-block-type (:data block-head)))
    (swap! block-data assoc :entity (tag-handler/get-entity (:data block-head)))


    (mapv

     (fn [line]

       (cond
         (< 1 (:level line)) nil
         (str/includes? (:data line) "TAG_CHANGE") (swap! block-data update-in [:tags] conj (tag-handler/get-tag-data (:data line)))
         (str/includes? (:data line) "SHOW_ENTITY") (swap! block-data update-in [:shown-entities] conj (entity-handler/get-show-entity-data (:data line)))
         (str/includes? (:data line) "BLOCK_START") (logger/temp "Block in block")))

     lines)

    (let [groups (vals (group-by :entity (:tags @block-data)))]
      (swap! block-data assoc :tags (mapv #(apply merge %) groups)))

    @block-data))



(defn parse-tags-update [tag]
  (logger/temp "tag " tag)
  (when (= "1" (:CURRENT_PLAYER tag)) (ipc/send-current-player (:entity tag))))



(defn on-attack-block [content]
  (logger/block "Attack block" content))

(defn on-play-block [block-data]
  (logger/block "Play block")
  (when (some? (:shown-entities block-data)) (logger/block "Stuff shown")))

(defn on-trigger-block [block-data]
  (logger/block "Trigger block")
  (when (some? (:shown-entities block-data)) (logger/block "Stuff shown"))

  (mapv parse-tags-update (:tags block-data))


  )

(defn on-power-block [content]
  (logger/block "Power block" content))

(defn on-deaths-block [content]
  (logger/block "Deaths block"))

(defn handle-block [block-buffer]
  (let [block-data (get-block-data (:content block-buffer))]
    (case (:type block-data)
      "ATTACK"  (on-attack-block block-data)
      "PLAY"    (on-play-block block-data)
      "TRIGGER" (on-trigger-block block-data)
      "POWER"   (on-power-block block-data)
      "DEATHS"  (on-deaths-block block-data)
      (logger/error "Uknown block found"))))
