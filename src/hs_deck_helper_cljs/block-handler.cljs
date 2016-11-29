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
                 :full-entities []
                 :shown-entities []})

(defn get-block-data
  ([content] (get-block-data content 1))
  ([content level]
   (logger/pprint "Reacting to" content)
   (let [block-data (atom base-block)
         lines-of-level (filter #(= (:level %) level) content)
         lines-not-in-level (filter #(not= (:level %) level) content)]

     (mapv
      #(let [data (:data %)]
          (cond
            (< 1 (:level line)) nil
            (str/includes? data "TAG_CHANGE") (swap! block-data update-in [:tags] conj (tag-handler/get-tag-data data))
            (str/includes? data "FULL_ENTITY") (swap! block-data update-in [:full-entities] conj (entity-handler/get-full-entity-data data))
            (str/includes? data "SHOW_ENTITY") (swap! block-data update-in [:shown-entities] conj (entity-handler/get-show-entity-data data))
            (str/includes? data "BLOCK_START") (do (swap! block-data assoc :type (parsers/get-block-type data))
                                                   (swap! block-data assoc :entity (parsers/get-entity data)))))
        lines-of-level)

     (let [groups (vals (group-by :entity (:tags @block-data)))]
       (swap! block-data assoc :tags (mapv #(apply merge %) groups)))

     (when (not-empty lines-not-in-level)
       (swap! block-data update-in [:blocks] conj (get-block-data lines-not-in-level (inc level))))

     (logger/pprint "Extracted" @block-data)

     @block-data)))

(defn handle-shown-entity [entity]

  )

(defn handle-tag [tag]
  (when (= 1 (:current_player tag)) (ipc/send-current-player (:entity tag))))

(defn handle-block [block-buffer]
  (let [block-data (get-block-data (:content block-buffer))]
    (mapv handle-shown-entity (:shown-entities block-data))
    (mapv handle-block (:blocks block-data))
    (mapv handle-tag (:tags block-data))))
