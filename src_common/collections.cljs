(ns common.collections)

(defn find-first [predicate collection]
  (some #(when (predicate %) %) collection))
