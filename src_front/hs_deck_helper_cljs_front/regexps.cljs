(ns hs-deck-helper-cljs-front.regexps)

(def transition-card "TRANSITIONING card \\name=.* to ")

(def friendly-draw (str transition-card "FRIENDLY HAND"))

(def opposing-play (str transition-card "OPPOSING PLAY"))

(def friendly-play (str transition-card "FRIENDLY PLAY"))
