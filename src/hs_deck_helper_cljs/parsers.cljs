(ns hs-deck-helper-cljs.parsers)


(defn get-entity [line]
  (let [array-based (apply str (drop 7 (re-find #"Entity=\[.+\]" line)))
        single (apply str (drop 7 (re-find #"Entity=\S+" line)))]
    (if (> array-based single)
      array-based
      single)))

(defn get-zone [line]
  (let [found (re-find #"zone=\S+" line)]
    (when found (apply str (drop 5 found)))))

(defn get-card-id [line]
  (let [found (re-find #"cardId=\S+" line)]
    (when found (apply str (drop 7 found)))))

(defn get-zone-pos [line]
  (let [found (re-find #"zonePos=\S+" line)]
    (when found (apply str (drop 8 found)))))

(defn get-player [line]
  (let [found (re-find #"player=\d+" line)]
    (when found (apply str (drop 7 found)))))

(defn get-value [line]
  (parse-value (apply str (drop 6 (re-find #"value=\S+" line)))))

(defn get-block-type [line]
  (apply str (drop 10 (re-find #"BlockType=\S+" line))))


(defn get-tag [line]
  (apply str (drop 4 (re-find #"tag=\S+" line))))

(defn parse-value [value]
  (cond
    (not (js/isNaN value)) (js/Number value)
    :else value))
