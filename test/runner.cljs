(ns hs-deck-helper-cljs-test.runner
  (:require [doo.runner :refer-macros [doo-tests]]

                                        ;Common
            [hs-deck-helper-cljs-test.common.collections]

                                        ;Main
            [hs-deck-helper-cljs-test.main.events]
            [hs-deck-helper-cljs-test.main.ipc]
            [hs-deck-helper-cljs-test.main.block-handler]




            ))


(doo-tests

                                        ;Common
 'hs-deck-helper-cljs-test.common.collections

                                        ;Main
 'hs-deck-helper-cljs-test.main.events
 'hs-deck-helper-cljs-test.main.block-handler
 'hs-deck-helper-cljs-test.main.ipc
 )
