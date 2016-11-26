(ns hs-deck-helper-cljs.block-handler
  (:require [common.logger :as logger]
            [clojure.string :as str]
            [hs-deck-helper-cljs.parsers :as parsers]
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
  (logger/pprint "Reacting to" content)
  (let [
        block-data (atom base-block)
        block-head (first content)
        block-head-level (:level block-head)

        lines (rest content)
        ]

    (swap! block-data assoc :type (parsers/get-block-type (:data block-head)))
    (swap! block-data assoc :entity (parsers/get-entity (:data block-head)))


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

    (logger/pprint "Extracted" @block-data)

    @block-data))

(defn handle-shown-entity [entity]

  )

(defn handle-tag [tag]
  (when (= 1 (:current_player tag)) (ipc/send-current-player (:entity tag))))

(defn handle-block [block-buffer]
  (let [block-data (get-block-data (:content block-buffer))]
    (mapv handle-shown-entity (:shown-entities block-data))
    (mapv handle-block (:blocks block-data))
    (mapv handle-tag (:tags block-data))))
