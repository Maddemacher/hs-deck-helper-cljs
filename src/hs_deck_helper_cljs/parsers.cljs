(ns hs-deck-helper-cljs.parsers)


(defn get-entity [line]
  (let [array-based (apply str (drop 7 (re-find #"Entity=\[.+\]" line)))
        single (apply str (drop 7 (re-find #"Entity=\S+" line)))]
    (if (> array-based single)
      array-based
      single)))

(defn get-value [line]
  (let [value (apply str (drop 6 (re-find #"value=\S+" line)))]
    (cond
      (not (js/isNaN value)) (js/Number value)
      :else value)))

(defn get-block-type [line]
  (apply str (drop 10 (re-find #"BlockType=\S+" line))))


(defn get-tag [line]
  (apply str (drop 4 (re-find #"tag=\S+" line))))
