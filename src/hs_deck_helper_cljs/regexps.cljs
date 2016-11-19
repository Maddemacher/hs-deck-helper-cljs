(ns hs-deck-helper-cljs.regexps)

(def transition-card "TRANSITIONING card \\[name=.* to ")

(def friendly-draw (re-pattern (str transition-card "FRIENDLY HAND")))

(def opposing-play (re-pattern (str transition-card "OPPOSING PLAY")))

(def friendly-play (re-pattern (str transition-card "FRIENDLY PLAY")))

(def match-end (re-pattern "\\[Power\\] GameState.DebugPrintPower\\(\\) - CREATE_GAME"))

(def card-id #"cardId=\S+")
