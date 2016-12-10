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
                                   :current_zone "DECK"
                                   :player 1
                                   :zone_position 6}

                                  {:entity "Madde"
                                   :num_cards_drawn_this_turn 1}

                                  {:entity "GameEntAty"
                                   :next_step "MAIN_ACTION"}]
                           :blocks []
                           :shown-entities [{:entity "[id=15 cardId= type=INVALID zone=DECK zonePos=0 player=1]"
                                             :cardid "EX1_411"
                                             :atk 7
                                             :cost 7
                                             :zone "HAND"
                                             :durability 1
                                             :faction "NEUTRAL"
                                             :cardtype "WEAPON"
                                             :rarity "EPIC"
                                             :tag_last_known_cost_in_hand 7
                                             }]
                           :full-entities []
                           })



(def player-change [
                    {:data "BLOCK_START BlockType=TRIGGER Entity=GameEntity EffectCardId= EffectIndex=-1 Target=0" :level 1}
                    {:data "    TAG_CHANGE Entity=DoubleDamage tag=NUM_TURNS_LEFT value=0" :level 1}
                    {:data "    TAG_CHANGE Entity=DoubleDamage tag=NUM_TURNS_LEFT value=1" :level 1}
                    {:data "    TAG_CHANGE Entity=DoubleDamage tag=CURRENT_PLAYER value=0" :level 1}
                    {:data "    TAG_CHANGE Entity=Madde tag=CURRENT_PLAYER value=1" :level 1}
                    {:data "    TAG_CHANGE Entity=GameEntity tag=TURN value=2" :level 1}
                    {:data "    TAG_CHANGE Entity=GameEntity tag=NEXT_STEP value=MAIN_READY" :level 1}
                    {:data "BLOCK_END" :level 1}]
  )

(def player-change-parsed
  {:type "TRIGGER"
   :entity "GameEntity"
   :tags [
          {:entity "DoubleDamage" :num_turns_left 1 :current_player 0}
          {:entity "Madde" :current_player 1}
          {:entity "GameEntity" :turn 2 :next_step "MAIN_READY"}
          ]
   :blocks []
   :shown-entities []
   :full-entities []
   })

(def nzoth-played ["BLOCK_START BlockType=PLAY Entity=[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1] EffectCardId= EffectIndex=0 Target=0"
                   "     TAG_CHANGE Entity=Madde tag=RESOURCES_USED value=1"
                   "     TAG_CHANGE Entity=Madde tag=NUM_RESOURCES_SPENT_THIS_GAME value=1"
                   "     TAG_CHANGE Entity=Madde tag=NUM_CARDS_PLAYED_THIS_TURN value=1"
                   "     TAG_CHANGE Entity=Madde tag=NUM_MINIONS_PLAYED_THIS_TURN value=1"
                   "     TAG_CHANGE Entity=[name=Gorehowl id=15 zone=HAND zonePos=6 cardId=EX1_411 player=1] tag=ZONE_POSITION value=5"
                   "     TAG_CHANGE Entity=[name=Kor'kron Elite id=25 zone=HAND zonePos=4 cardId=NEW1_011 player=1] tag=ZONE_POSITION value=3"
                   "     TAG_CHANGE Entity=[name=The Coin id=68 zone=HAND zonePos=5 cardId=GAME_005 player=1] tag=ZONE_POSITION value=4"
                   "     TAG_CHANGE Entity=[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1] tag=ZONE value=PLAY"
                   "     TAG_CHANGE Entity=[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1] tag=ZONE_POSITION value=1"
                   "     TAG_CHANGE Entity=[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1] tag=EXHAUSTED value=1"
                   "     TAG_CHANGE Entity=[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1] tag=JUST_PLAYED value=1"
                   "     TAG_CHANGE Entity=Madde tag=LAST_CARD_PLAYED value=5"
                   "     BLOCK_START BlockType=POWER Entity=[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1] EffectCardId= EffectIndex=-1 Target=0"
                   "         FULL_ENTITY - Creating ID=69 CardID=OG_058"
                   "             tag=ATK value=1"
                   "             tag=COST value=1"
                   "             tag=ZONE value=PLAY"
                   "             tag=CONTROLLER value=1"
                   "             tag=ENTITY_ID value=69"
                   "             tag=DURABILITY value=3"
                   "             tag=CARDTYPE value=WEAPON"
                   "             tag=CREATOR value=5"
                   "             tag=TAG_LAST_KNOWN_COST_IN_HAND value=1"
                   "         TAG_CHANGE Entity=Madde tag=334 value=69"
                   "     BLOCK_END"
                   "     TAG_CHANGE Entity=[name=Dread Corsair id=14 zone=HAND zonePos=2 cardId=NEW1_022 player=1] tag=TAG_LAST_KNOWN_COST_IN_HAND value=3"
                   "     TAG_CHANGE Entity=[name=Garrosh Hellscream id=64 zone=PLAY zonePos=0 cardId=HERO_01 player=1] tag=ATK value=1"
                   "     TAG_CHANGE Entity=[name=Dread Corsair id=14 zone=HAND zonePos=2 cardId=NEW1_022 player=1] tag=COST value=3"
                   "     TAG_CHANGE Entity=Madde tag=COMBO_ACTIVE value=1"
                   "     TAG_CHANGE Entity=Madde tag=NUM_OPTIONS_PLAYED_THIS_TURN value=1"
                   "BLOCK_END"])

(def nzoth-played-block {:appending true
                         :content [{:data (get nzoth-played 0) :level 1}
                                   {:data (get nzoth-played 1) :level 1}
                                   {:data (get nzoth-played 2) :level 1}
                                   {:data (get nzoth-played 3) :level 1}
                                   {:data (get nzoth-played 4) :level 1}
                                   {:data (get nzoth-played 5) :level 1}
                                   {:data (get nzoth-played 6) :level 1}
                                   {:data (get nzoth-played 7) :level 1}
                                   {:data (get nzoth-played 8) :level 1}
                                   {:data (get nzoth-played 9) :level 1}
                                   {:data (get nzoth-played 10) :level 1}
                                   {:data (get nzoth-played 11) :level 1}
                                   {:data (get nzoth-played 12) :level 1}
                                   {:data (get nzoth-played 13) :level 2}
                                   {:data (str (get nzoth-played 14)
                                               (get nzoth-played 15)
                                               (get nzoth-played 16)
                                               (get nzoth-played 17)
                                               (get nzoth-played 18)
                                               (get nzoth-played 19)
                                               (get nzoth-played 20)
                                               (get nzoth-played 21)
                                               (get nzoth-played 22)
                                               (get nzoth-played 23)) :level 2}
                                   {:data (get nzoth-played 24) :level 2}
                                   {:data (get nzoth-played 25) :level 2}
                                   {:data (get nzoth-played 26) :level 1}
                                   {:data (get nzoth-played 27) :level 1}
                                   {:data (get nzoth-played 28) :level 1}
                                   {:data (get nzoth-played 29) :level 1}
                                   {:data (get nzoth-played 30) :level 1}
                                   {:data (get nzoth-played 31) :level 1}
                                   ]
                         :tag-count 0})


(def nzoth-played-parsed
  {:type "PLAY"
   :entity "[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1]"
   :tags [{
           :entity "Madde"
           :resources_used 1
           :num_resources_spent_this_game 1
           :num_cards_played_this_turn 1
           :num_minions_played_this_turn 1
           :last_card_played 5
           :combo_active 1
           :num_options_played_this_turn 1
           }
          {
           :entity "[name=Gorehowl id=15 zone=HAND zonePos=6 cardId=EX1_411 player=1]"
           :current_zone "HAND"
           :player 1
           :zone_position 5
           }
          {
           :entity "[name=Kor'kron Elite id=25 zone=HAND zonePos=4 cardId=NEW1_011 player=1]"
           :current_zone "HAND"
           :player 1
           :zone_position 3
           }
          {
           :entity "[name=The Coin id=68 zone=HAND zonePos=5 cardId=GAME_005 player=1]"
           :current_zone "HAND"
           :player 1
           :zone_position 4}
          {
           :entity "[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1]"
           :current_zone "HAND"
           :zone "PLAY"
           :zone_position 1
           :exhausted 1
           :player 1
           :just_played 1
           }
          {
           :entity "[name=Dread Corsair id=14 zone=HAND zonePos=2 cardId=NEW1_022 player=1]"
           :current_zone "HAND"
           :player 1
           :tag_last_known_cost_in_hand 3
           :cost 3
           }
          {
           :entity "[name=Garrosh Hellscream id=64 zone=PLAY zonePos=0 cardId=HERO_01 player=1]"
           :current_zone "PLAY"
           :player 1
           :atk 1
           }

          ]
   :blocks [
            {:entity "[name=N'Zoth's First Mate id=5 zone=HAND zonePos=3 cardId=OG_312 player=1]"
             :type "POWER"
             :tags [{:entity "Madde" :334 69}]
             :blocks []
             :full-entities [{
                              :cardid "OG_058"
                              :atk 1
                              :cost 1
                              :zone "PLAY"
                              :controller 1
                              :entity_id 69
                              :durability 3
                              :cardtype "WEAPON"
                              :creator 5
                              :tag_last_known_cost_in_hand 1
                              }]
             :shown-entities []}]
   :full-entities []
   :shown-entities []})
