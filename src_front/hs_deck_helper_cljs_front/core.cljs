(ns hs-deck-helper-cljs-front.core
  (:require [reagent.core :as r :refer [atom]]
            [common.logger :as logger]
            [re-frame.core :as re-frame :refer [subscribe dispatch dispatch-sync]]
            [hs-deck-helper-cljs-front.events :as events]
            [hs-deck-helper-cljs-front.subs :as subs]
            [hs-deck-helper-cljs-front.ipc :as ipc]))

(defn root-component []
  (let [
        friendly-played (re-frame/subscribe [:get-friendly-play])
        friendly-drawn  (re-frame/subscribe [:get-friendly-draw])
        opposing-played (re-frame/subscribe [:get-opposing-play])
        ]
    [:div.col-xs-12
     [:h1 "Best HS Deckhelper EU"]

     [:div.col-xs-4
      [:h2 "Friendly Played"]
      [:ul (for [card (clj->js @friendly-played)]
             [:li (str (.-name card) (.-count card))])]]

     [:div.col-xs-4
      [:h2 "Friendly Drawn"]
      [:ul (for [card (clj->js @friendly-drawn)]
             [:li (str (.-name card))])]]


     [:div.col-xs-4
      [:h2 "Opposing Played"]
      [:ul (for [card (clj->js @opposing-played)]
             [:li (str (.-name card) (.-count card))])]]


     ]))


(defn mount-root [setting]
  (r/render [root-component]
            (.getElementById js/document "app")))

(defn init! [setting]
  (logger/info "Initialization of core")
  (re-frame/dispatch-sync [:initialize-db])
  (ipc/setup-listeners)
  (mount-root setting))
