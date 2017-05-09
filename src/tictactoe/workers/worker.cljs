(ns tictactoe.main.worker
  (:require [butler.core :as butler]
            [tictactoe.ai.minimax :refer [find-best-move]]))

(defn analyze-handler [board]
  (butler/bring! :analyze-result (find-best-move board)))

(butler/serve! {:request-analyze analyze-handler})
