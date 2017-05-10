(defproject tictactoe "0.0.1"
  :description "Tic tac toe"
  :url "https://motiko.github.io/cljs-ttt"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [org.clojure/core.async  "0.3.442"
                  :exclusions [org.clojure/tools.reader]]
                 [reagent "0.6.0"]
                 [butler "0.2.0"]]

  :plugins [ [lein-cljsbuild "1.1.6"]]

  :source-paths ["src" "dev"]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:test-commands {"ai" ["node" "resources/private/js/tests.js"]}
              :builds
              [{:id "dev"
                :source-paths ["src/tictactoe/main"]
                :compiler {:main tictactoe.main.core
                           :asset-path "js/compiled/ttt"
                           :output-to "resources/public/js/compiled/tictactoe.js"
                           :output-dir "resources/public/js/compiled/ttt"
                           :source-map-timestamp true}}
               {:id "dev-worker"
                :source-paths ["src/tictactoe/workers"]
                :compiler {:output-to "resources/public/js/compiled/worker.js"
                           :output-dir "resources/public/js/compiled/worker"
                           :source-map-timestamp true
                           :optimizations :whitespace
                           :pretty-print true}}
               {:id "test"
                :source-paths ["src/tictactoe/ai" "test/tictactoe"]
                :compiler {
                           :output-to "resources/private/js/tests.js"
                           :optimizations :simple
                           :pretty-print true
                           :target :nodejs}}

               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/tictactoe.js"
                           :main tictactoe.main.core
                           :optimizations :advanced
                           :pretty-print false}}]})
