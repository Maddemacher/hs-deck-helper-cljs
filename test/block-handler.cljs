(ns hs-deck-helper-cljs-test.block-handler
  (:require  [cljs.test :refer-macros [async deftest is testing]]
             [hs-deck-helper-cljs.block-handler :as block-handler]))


(deftest block-handler-parses-block-correctly
  (is (true? true))
  (is (false? true)))
