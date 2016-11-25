(ns hs-deck-helper-cljs-test.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [hs-deck-helper-cljs-test.block-handler]))


(doo-tests 'hs-deck-helper-cljs-test.block-handler)
