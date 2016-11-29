(ns hs-deck-helper-cljs-test.block-handler
  (:require  [cljs.test :refer-macros [async deftest is testing]]
             [common.logger :as logger]
             [hs-deck-helper-cljs-test.data :as data]
             [hs-deck-helper-cljs.block-handler :as block-handler]))

(deftest block-handler-gets-block-data-correctly
  (let [parsed-block (block-handler/get-block-data (:content data/gorehowl-draw-block))]
    (is (= (:entity parsed-block) (:entity data/gorehowl-draw-parsed)))
    (is (= (:type parsed-block) (:type data/gorehowl-draw-parsed)))

    (is (= (count (:tags parsed-block) (count (:tags data/gorehowl-draw-parsed)))))
    (is (= (get (:tags parsed-block) 0) (get (:tags data/gorehowl-draw-parsed) 0)))
    (is (= (get (:tags parsed-block) 1) (get (:tags data/gorehowl-draw-parsed) 1)))
    (is (= (get (:tags parsed-block) 2) (get (:tags data/gorehowl-draw-parsed) 2)))

    (is (= (count (:shown-entities parsed-block)) (count (:shown-entities data/gorehowl-draw-parsed))))
    (let [parsed-gorehowl (get (:shown-entities parsed-block) 0)
          reference-gorehowl (get (:shown-entities data/gorehowl-draw-parsed) 0)]
      (is (= reference-gorehowl parsed-gorehowl))
      (is (= (:entity reference-gorehowl) (:entity parsed-gorehowl)))
      (is (= (:cardid reference-gorehowl) (:cardid parsed-gorehowl)))
      (is (= (:atk reference-gorehowl) (:atk parsed-gorehowl))))

    (is (= (count (:blocks parsed-block)) (count (:blocks data/gorehowl-draw-parsed))))


    (is (= parsed-block data/gorehowl-draw-parsed))))


(deftest block-handler-gets-current-player-block-correctly
  (is (= (block-handler/get-block-data data/player-change) data/player-change-parsed)))


(deftest block-handler-gets-nzoth-played-block-correctly
  (is (= (block-handler/get-block-data (:content data/nzoth-played-block)) data/nzoth-played-parsed)))
