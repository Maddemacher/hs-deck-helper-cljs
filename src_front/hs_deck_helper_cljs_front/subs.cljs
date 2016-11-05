(ns hs-deck-helper-cljs-front.subs
  (:require [re-frame.core :refer [reg-sub]]))


(reg-sub
  :get-beer-count
  (fn [db _]
    (:beer-count db)))
