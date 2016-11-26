(ns hs-deck-helper-cljs-test.block-handler
  (:require  [cljs.test :refer-macros [async deftest is testing]]
             [common.logger :as logger]
             [hs-deck-helper-cljs-test.data :as data]
             [hs-deck-helper-cljs.block-handler :as block-handler]))

(deftest block-handler-gets-block-data-correctly
  (let [parsed-block (block-handler/get-block-data (:content data/gorehowl-draw-block))]
    (logger/pprint "Parsed block" parsed-block)
    (is (= (:entity parsed-block) (:entity data/gorehowl-draw-parsed)))
    (is (= (:type parsed-block) (:type data/gorehowl-draw-parsed)))

    (is (= (count (:tags parsed-block) (count (:tags data/gorehowl-draw-parsed)))))
    (is (= (get (:tags parsed-block) 0) (get (:tags data/gorehowl-draw-parsed) 0)))
    (is (= (get (:tags parsed-block) 1) (get (:tags data/gorehowl-draw-parsed) 1)))
    (is (= (get (:tags parsed-block) 2) (get (:tags data/gorehowl-draw-parsed) 2)))

    (is (= (count (:shown-entities parsed-block)) (count (:shown-entities data/gorehowl-draw-parsed))))


    (is (= (count (:blocks parsed-block)) (count (:blocks data/gorehowl-draw-parsed))))))
