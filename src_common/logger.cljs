(ns common.logger)

(defonce loglevel {:info "INFO" :error "ERROR"})

(defn log [level & message]
  (js/console.log (apply str (flatten (interpose " | "  [(new js/Date) level message])))))

(defn info [& message]
  (log (:info loglevel) message))

(defn error [& message]
  (log (:error loglevel) message))
