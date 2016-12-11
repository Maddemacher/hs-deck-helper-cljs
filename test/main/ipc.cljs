(ns hs-deck-helper-cljs-test.main.ipc
  (:require  [cljs.test :refer-macros [async deftest is testing]]
             [common.logger :as logger]
             [hs-deck-helper-cljs-test.main.data :as data]
             [hs-deck-helper-cljs.block-handler :as block-handler]
             [hs-deck-helper-cljs.ipc :as ipc]))


(defonce message-log (atom []))

(defn setup []
  (reset! message-log [])
  (ipc/setup-listeners (clj->js
                        {:webContents
                         {
                          :send (fn [topic message] (reset! message-log (conj @message-log {:topic topic :message message})))
                          }
                         })))



(deftest player-changed-event-is-acted-upon-correctly []
  (setup)
  (block-handler/act-on-block data/player-change-parsed)
  (is (= (count @message-log) 1))
  (is (= (get @message-log 0) {:topic "current-player" :message "Madde"})))


(deftest nzoth-played-event-is-acted-upon-correctly []
  (setup)
  (block-handler/act-on-block data/nzoth-played-parsed)
  (is (= (count @message-log) 1))
  (is (= (get @message-log 0) {:topic "card-played"
                               :message {
                                         :entity "[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1]"
                                         :name "N'Zoth's First Mate"
                                         :zone "PLAY"
                                         :current_zone_position 3
                                         :zone_position 1
                                         :id 5
                                         :current_zone "HAND"
                                         :exhausted 1
                                         :player 1
                                         :card_id "OG_312"
                                         :just_played 1}})))
