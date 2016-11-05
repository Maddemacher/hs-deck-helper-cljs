(ns hs-deck-helper-cljs-front.init
    (:require [hs-deck-helper-cljs-front.core :as core]
              [hs-deck-helper-cljs-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
