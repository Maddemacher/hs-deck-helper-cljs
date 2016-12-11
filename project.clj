(defproject hs-deck-helper-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha10"]
                 [org.clojure/clojurescript "1.9.198"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.6.0"]
                 [re-frame "0.8.0"]
                 ]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-doo "0.1.7"]
            [lein-externs "0.1.6"]
            [lein-shell "0.4.1"]
            [lein-figwheel "0.5.8"]]
  :source-paths ["src_tools"]
  :aliases {"descjop-help" ["new" "descjop" "help"]
            "descjop-version" ["new" "descjop" "version"]
            "descjop-test" ["doo" "node" "test-main"]
            "descjop-test-front" ["doo" "electron" "test-front"]
            "descjop-init" ["do"
                            ["shell" "npm" "install"]
                            ["shell" "grunt" "download-electron"]]
            "descjop-init-win" ["do"
                            ["shell" "cmd.exe" "/c" "npm" "install"]
                            ["shell" "cmd.exe" "/c" "grunt" "download-electron"]]
            "descjop-externs" ["do"
                               ["externs" "dev-main" "app/dev/js/externs.js"]
                               ["externs" "test-main" "app/test/externs.js"]
                               ["externs" "dev-front" "app/dev/js/externs_front.js"]
                               ["externs" "test-front" "app/test_front/externs.js"]
                               ["externs" "prod-main" "app/prod/js/externs.js"]
                               ["externs" "prod-front" "app/prod/js/externs_front.js"]]
            "descjop-externs-dev" ["do"
                                   ["externs" "dev-main" "app/dev/js/externs.js"]
                                   ["externs" "dev-front" "app/dev/js/externs_front.js"]]
            "descjop-externs-prod" ["do"
                                    ["externs" "prod-main" "app/prod/js/externs.js"]
                                    ["externs" "prod-front" "app/prod/js/externs_front.js"]]
            "descjop-figwheel" ["trampoline" "figwheel" "dev-front"]
            "descjop-once" ["do"
                            ["cljsbuild" "once" "dev-main"]
                            ["cljsbuild" "once" "dev-front"]
                            ["cljsbuild" "once" "prod-main"]
                            ["cljsbuild" "once" "prod-front"]]
            "descjop-once-dev" ["do"
                                ["cljsbuild" "once" "dev-main"]
                                ["cljsbuild" "once" "dev-front"]]
            "descjop-once-prod" ["do"
                                 ["cljsbuild" "once" "prod-main"]
                                 ["cljsbuild" "once" "prod-front"]]
            "run-prod" ["do"
                        ["descjop-once-prod"]
                        ["shell" "cmd.exe" "/c" "electron" "app/prod/index.html"]]
            "run-dev" ["do"
                       ["descjop-once-dev"]
                       ["shell" "cmd.exe" "/c" "electron" "app/dev/index.html"]]}
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds
              {:test-main {:source-paths ["src_common" "src" "test"]
                           :compiler {:output-to "app/test/js/cljsbuild-main.js"
                                      :externs ["app/test/js/externs.js"
                                                "node_modules/closurecompiler-externs/path.js"
                                                "node_modules/closurecompiler-externs/process.js"]
                                      :main hs-deck-helper-cljs-test.runner
                                      :optimizations :none
                                      :target :nodejs
                                      :output-dir "app/test/js/out/"
                                      }}
               :test-front {:source-paths ["src_common" "src_front" "test_front"]
                            :compiler {:output-to "app/test_front/js/cljsbuild-front-main.js"
                                       :externs ["test_front/externs.js"]
                                       :main hs-deck-helper-cljs-test-front.runner
                                       :optimizations :none
                                       :output-dir "app/test_front/js/out/"
                                       }}
               :dev-main {:source-paths ["src_common" "src"]
                          :incremental true
                          :jar true
                          :assert true
                          :compiler {:output-to "app/dev/js/cljsbuild-main.js"
                                     :externs ["app/dev/js/externs.js"
                                               "node_modules/closurecompiler-externs/path.js"
                                               "node_modules/closurecompiler-externs/process.js"]
                                     :warnings true
                                     :elide-asserts true
                                     :target :nodejs

                                     ;; no optimize compile (dev)
                                     ;; :optimizations :none
                                     ;; when no optimize uncomment
                                     ;; :output-dir "app/dev/js/out"

                                     ;; simple compile (dev)
                                     :optimizations :simple

                                     ;; advanced compile (prod)
                                     ;;:optimizations :advanced

                                     ;;:source-map "app/dev/js/test.js.map"
                                     :pretty-print true
                                     :output-wrapper true}}
               :dev-front {:source-paths ["src_common" "src_front" "src_front_profile/hs_deck_helper_cljs_front/dev"]
                           :incremental true
                           :jar true
                           :assert true
                           :compiler {:output-to "app/dev/js/front.js"
                                      :externs ["app/dev/js/externs_front.js"]
                                      :warnings true
                                      :elide-asserts true
                                      ;; :target :nodejs

                                      ;; no optimize compile (dev)
                                      :optimizations :none
                                      ;; when no optimize uncomment
                                      :output-dir "app/dev/js/out"

                                      ;; simple compile (dev)
                                      ;;:optimizations :simple

                                      ;; advanced compile (prod)
                                      ;;:optimizations :advanced

                                      ;;:source-map "app/dev/js/test.js.map"
                                      :pretty-print true
                                      :output-wrapper true}}
               :prod-main {:source-paths ["src_common" "src"]
                           :incremental true
                           :jar true
                           :assert true
                           :compiler {:output-to "app/prod/js/cljsbuild-main.js"
                                      :externs ["app/prod/js/externs.js"
                                                "node_modules/closurecompiler-externs/path.js"
                                                "node_modules/closurecompiler-externs/process.js"]
                                      :warnings true
                                      :elide-asserts true
                                      :target :nodejs

                                      ;; no optimize compile (dev)
                                      :optimizations :none
                                      ;; when no optimize uncomment
                                      :output-dir "app/prod/js/out"

                                      ;; simple compile (dev)
                                      ;:optimizations :simple

                                      ;; advanced compile (prod)
                                      ;;:optimizations :advanced

                                      ;;:source-map "app/prod/js/test.js.map"
                                      :pretty-print true
                                      :output-wrapper true}}
               :prod-front {:source-paths ["src_common" "src_front" "src_front_profile/hs_deck_helper_cljs_front/prod"]
                            :incremental true
                            :jar true
                            :assert true
                            :compiler {:output-to "app/prod/js/front.js"
                                       :externs ["app/prod/js/externs_front.js"]
                                       :warnings true
                                       :elide-asserts true
                                       ;; :target :nodejs

                                       ;; no optimize compile (dev)
                                       :optimizations :none
                                       ;; when no optimize uncomment
                                       :output-dir "app/prod/js/front/out"

                                       ;; simple compile (dev)
                                       ;;:optimizations :simple

                                       ;; advanced compile (prod)
                                       ;;:optimizations :advanced

                                       ;;:source-map "app/prod/js/test.js.map"
                                       :pretty-print true
                                       :output-wrapper true}}}}
  :figwheel {:http-server-root "public"
             :ring-handler figwheel-middleware/app
             :server-port 3449})
