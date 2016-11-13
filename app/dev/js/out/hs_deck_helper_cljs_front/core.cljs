(ns hs-deck-helper-cljs-front.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :as re-frame :refer [subscribe dispatch dispatch-sync]]
            [hs-deck-helper-cljs-front.events :as events]
            [hs-deck-helper-cljs-front.api :as api]
            [hs-deck-helper-cljs-front.subs :as subs]
            [hs-deck-helper-cljs-front.ipc :as ipc]))

(defn root-component []
  (let [beer-count (re-frame/subscribe [:get-beer-count])
        friendly-played (re-frame/subscribe [:get-friendly-play])
        ;friendly-drawn (re-frame/subscribe [:friendly-drawn])
        ;opponent-played (re-frame/subscribe [:opponent-played])
        ]
    (js/console.log "op " (clj->js @friendly-played))
    [:div.col-lg-12
     [:h1 (str "Current beer count " @beer-count)]
     [:ul (for [card (clj->js @friendly-played)]
            [:li (.-name card)])]
     ;[:p @friendly-played]
     ;[:p @opponent-played]
     ;[:p @friendly-drawn]
     [:button.btn.btn-primary { :on-click #(re-frame/dispatch [:open-beer]) } "Click me"]]))


(defn mount-root [setting]
  (r/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (re-frame/dispatch-sync [:initialize-db])
  (ipc/setup-listeners)
  (mount-root setting))
