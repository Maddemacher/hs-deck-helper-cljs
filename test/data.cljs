(ns hs-deck-helper-cljs-test.data
  (:require  [clojure.test :as t]))


(def gorehowl-draw [" BLOCK_START BlockType=TRIGGER Entity=Madde EffectCardId= EffectIndex=0 Target="
                    "     SHOW_ENTITY - Updating Entity=[id=15 cardId= type=INVALID zone=DECK zonePos=0 player=1] CardID=EX1_411"
                    "         tag=ATK value=7"
                    "         tag=COST value=7"
                    "         tag=ZONE value=HAND"
                    "         tag=DURABILITY value=1"
                    "         tag=FACTION value=NEUTRAL"
                    "         tag=CARDTYPE value=WEAPON"
                    "         tag=RARITY value=EPIC"
                    "         tag=TAG_LAST_KNOWN_COST_IN_HAND value=7"
                    "     TAG_CHANGE Entity=[id=15 cardId= type=INVALID zone=DECK zonePos=0 player=1] tag=ZONE_POSITION value=6"
                    "     TAG_CHANGE Entity=Madde tag=NUM_CARDS_DRAWN_THIS_TURN value=1"
                    "     TAG_CHANGE Entity=GameEntAty tag=NEXT_STEP value=MAIN_ACTION"
                    " BLOCK_END"])

(def gorehowl-draw-block {:appending true
                          :content [{:data (get gorehowl-draw 0) :level 1}
                                    {:data (str (get gorehowl-draw 1)
                                                (get gorehowl-draw 2)
                                                (get gorehowl-draw 3)
                                                (get gorehowl-draw 4)
                                                (get gorehowl-draw 5)
                                                (get gorehowl-draw 6)
                                                (get gorehowl-draw 7)
                                                (get gorehowl-draw 8)
                                                (get gorehowl-draw 9)) :level 1}
                                    {:data (get gorehowl-draw 10) :level 1}
                                    {:data (get gorehowl-draw 11) :level 1}
                                    {:data (get gorehowl-draw 12) :level 1}
                                    {:data (get gorehowl-draw 13) :level 1}]
                          :tag-count 0})

(def gorehowl-draw-parsed {:type "TRIGGER"
                           :entity "Madde"
                           :tags [{:entity "[id=15 cardId= type=INVALID zone=DECK zonePos=0 player=1]"
                                   :ZONE_POSITION 6}

                                  {:entity "Madde"
                                   :NUM_CARDS_DRAWN_THIS_TURN 1}

                                  {:entity "GameEntAty"
                                   :NEXT_STEP "MAIN_ACTION"}]
                           :blocks []
                           :shown-entities [{:entity "[id=15 cardId= type=INVALID zone=DECK zonePos=0 player=1]"
                                             :ATK 7
                                             :COST 7
                                             :ZONE "HAND"
                                             :DURABILITY 1
                                             :FACTION "NEUTRAL"
                                             :CARDTYPE "WEAPON"
                                             :RARITY "EPIC"
                                             :TAG_LAST_KNOWN_COST_IN_HAND 7
                                             }]
                           })
