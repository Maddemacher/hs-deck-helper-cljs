(ns common.logger)

(defonce log-config {:info false :error false :block false :tag false})
(defonce loglevel {:info "INFO" :error "ERROR" :block "BLOCK" :tag "TAG"})


(defn log [level & message]
  (js/console.log (apply str (flatten (interpose " | "  [(new js/Date) level message])))))

(defn info [& message]
  (when (:info log-config) (log (:info loglevel) message)))

(defn error [& message]
  (when (:error log-config) (log (:error loglevel) message)))

(defn block [& message]
  (when (:block log-config) (log (:block loglevel) message)))

(defn tag [& message]
  (when (:tag log-config) (log (:tag loglevel) message)))

(defn temp [& message]
  (log "TEMP" message))
