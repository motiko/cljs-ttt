(ns tictactoe.test
  (:require [cljs.test :as t]
            [tictactoe.ai.minimax :as ai]))

(enable-console-print!)

(t/deftest eval-lost-pos
  (let [board [["X" "B" "O"]
               ["B" "X" "B"]
               ["O" "B" "X"]]
        score ((ai/evaluate-moves-deep board "O" 1 "O") :score)]
    (t/is (= score -1 )  )))

(t/deftest eval-won-pos
  (let [board [["X" "B" "O"]
               ["B" "X" "B"]
               ["O" "B" "X"]]
        score ((ai/evaluate-moves-deep board "X" 1 "X") :score)]
    (t/is (= score 1 )  )))

(t/deftest one-move-win
  (let [board [["X" "B" "B"]
               ["B" "X" "B"]
               ["O" "B" "O"]]
        result (ai/evaluate-moves-deep board "O" 1 "O")
        move (result :move)]
    (t/is (= move [2 1] )  )))

(t/deftest block-one-move-win
  (let [board [["X" "B" "B"]
               ["B" "X" "B"]
               ["O" "B" "O"]]
        move ((ai/evaluate-moves-deep board "X" 1 "X") :move)]
    (t/is (= move [2 1] )  )))

(t/deftest fork
  (let [board [["O" "X" "X"]
               ["X" "B" "B"]
               ["O" "B" "B"]]
        move ((ai/evaluate-moves-deep board "O" 5 "O") :move)]
    (t/is (= move [2 2] )  )))

(t/deftest block-fork
  (let [board [["O" "X" "X"]
               ["X" "B" "B"]
               ["O" "B" "B"]]
        move ((ai/evaluate-moves-deep board "X" 5 "X") :move)]
    (t/is (= move [1 1] )  )))


(set! *main-cli-fn* #(t/run-tests))
