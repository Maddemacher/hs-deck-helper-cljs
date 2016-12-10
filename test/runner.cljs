(ns hs-deck-helper-cljs-test.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [hs-deck-helper-cljs-test.events]
            [hs-deck-helper-cljs-test.ipc]
            [hs-deck-helper-cljs-test.block-handler]))


(doo-tests 'hs-deck-helper-cljs-test.events
           'hs-deck-helper-cljs-test.block-handler
           'hs-deck-helper-cljs-test.ipc
           )
