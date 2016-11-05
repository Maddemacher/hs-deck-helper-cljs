(ns hs-deck-helper-cljs-front.resources)

(def hs-cards (js->clj (js/require "../../resources/hearthstoneCardsIdName.json")))
