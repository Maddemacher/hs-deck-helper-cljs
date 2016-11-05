(ns hs-deck-helper-cljs-front.init
  (:require [figwheel.client :as fw :include-macros true]
            [hs-deck-helper-cljs-front.core :as core]
            [hs-deck-helper-cljs-front.conf :as conf]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
