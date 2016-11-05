(ns hs-deck-helper-cljs-front.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :as re-frame :refer [subscribe dispatch dispatch-sync]]
            [hs-deck-helper-cljs-front.events :as events]
            [hs-deck-helper-cljs-front.subs :as subs]
            [hs-deck-helper-cljs-front.reader :as reader]))

(defn root-component []
  (let [beer-count (re-frame/subscribe [:get-beer-count])]
    [:div.col-lg-12
     [:h1 (str "Current beer count " @beer-count)]
     [:button.btn.btn-primary { :on-click #(re-frame/dispatch [:open-beer]) } "Click me"]]))


(defn mount-root [setting]
  (r/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (re-frame/dispatch-sync [:initialize-db])
  (reader/setup-file-watcher "")
  (mount-root setting))
-
