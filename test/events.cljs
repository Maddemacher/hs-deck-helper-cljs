(ns hs-deck-helper-cljs-test.events
  (:require  [cljs.test :refer-macros [async deftest is testing]]
             [common.logger :as logger]
             [hs-deck-helper-cljs-test.data :as data]
             [hs-deck-helper-cljs.events :as events]))


(deftest gorehowl-draw-is-handled-correctly
  (let [but-last-line (butlast data/gorehowl-draw)
        last-line (last data/gorehowl-draw)]
    (mapv #(is (nil? (events/parse-line %))) but-last-line)
    (let [block (events/parse-line last-line)]
      (is (= (count (:content block)) (count (:content data/gorehowl-draw-block))))
      (is (= (:appending block) (:appending data/gorehowl-draw-block)))
      (is (= block data/gorehowl-draw-block)))))

(deftest nzoth-play-is-handled-correctly
  (let [but-last-line (butlast data/nzoth-played)
        last-line (last data/nzoth-played)]
    (mapv #(is (nil? (events/parse-line %))) but-last-line)
    (let [block (events/parse-line last-line)]
      (is (= (count (:content block)) (count (:content data/nzoth-played-block))))
      (is (= (:appending block) (:appending data/nzoth-played-block)))
      (is (= block data/nzoth-played-block)))))
