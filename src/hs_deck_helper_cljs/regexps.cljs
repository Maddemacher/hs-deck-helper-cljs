(ns hs-deck-helper-cljs.regexps)

(def transition-card "TRANSITIONING card .* to ")

(def friendly-draw (re-pattern (str transition-card "FRIENDLY HAND")))

(def opposing-play (re-pattern (str transition-card "OPPOSING PLAY")))

(def friendly-play (re-pattern (str transition-card "FRIENDLY PLAY")))

(def match-end (re-pattern "\\[Power\\] GameState.DebugPrintPower\\(\\) - CREATE_GAME"))

(def block-start-tag (re-pattern "\\[Power\\] PowerTaskList.DebugPrintPower\\(\\) - BLOCK_START"))

(def block-end-tag (re-pattern "\\[Power\\] PowerTaskList.DebugPrintPower\\(\\) - BLOCK_END"))

(def card-id #"cardId=\S+")


(def block-type #"BlockType=\S+")


(def tag-change (re-pattern "\\[Power\\] GameState.DebugPrintPower\\(\\) - TAG_CHANGE"))
