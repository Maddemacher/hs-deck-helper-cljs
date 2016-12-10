(ns hs-deck-helper-cljs.tag-handler
  (:require [clojure.string :as str]
            [common.logger :as logger]
            [hs-deck-helper-cljs.parsers :as parsers]
            [hs-deck-helper-cljs.ipc :as ipc]))

(defn handle-tag-change [line]
  (logger/tag "in handle tag" line)
  (cond
    (str/includes? line "Entity=Madde tag=PLAYSTATE value=WON") (ipc/send-game-won)
    (str/includes? line "Entity=Madde tag=PLAYSTATE value=LOST") (ipc/send-game-lost)
    :else nil))

(defn get-tag-data [line]
  (let [entity (parsers/get-entity line)
        base (atom {:entity entity (keyword (.toLowerCase (parsers/get-tag line))) (parsers/get-value line)})
        currentZone (parsers/get-zone entity)
        player (parsers/get-player entity)]
    (when player (swap! base assoc :player (parsers/parse-value player)))
    (when currentZone (swap! base assoc :current_zone currentZone))
    @base))
