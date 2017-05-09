(ns tictactoe.test
  (:require [cljs.test :as t]))

(enable-console-print!)

(t/deftest qwe
  (t/is (= 1 0)))

(t/deftest asd
  (t/is (= 1 1)))

;; (deftest eval-lost-pos
;;   (let [board [["X" "B" "O"] 
;;                ["B" "X" "B"] 
;;                ["O" "B" "X"]]
;;         score ((ai.evaluate-moves-deep board "O" 1 "O") :score)]
;;     (is (= score -1 )  )))

;; (deftest eval-won-pos
;;   (let [board [["X" "B" "O"] 
;;                ["B" "X" "B"] 
;;                ["O" "B" "X"]]
;;         score ((ai/evaluate-moves-deep board "X" 1 "X") :score)]
;;     (is (= score 1 )  )))

;; (deftest one-move-win
;;   (let [board [["X" "B" "B"] 
;;                ["B" "X" "B"] 
;;                ["O" "B" "O"]]
;;         result (ai/evaluate-moves-deep board "O" 1 "O")
;;         move (result :move)]
;;     (is (= move [2 1] )  )))

;; (deftest block-one-move-win
;;   (let [board [["X" "B" "B"] 
;;                ["B" "X" "B"] 
;;                ["O" "B" "O"]]
;;         move ((ai/evaluate-moves-deep board "X" 1 "X") :move)]
;;     (is (= move [2 1] )  )))

;; (deftest fork
;;   (let [board [["O" "X" "X"] 
;;                ["X" "B" "B"] 
;;                ["O" "B" "B"]]
;;         move ((ai/evaluate-moves-deep board "O" 5 "O") :move)]
;;     (is (= move [2 2] )  )))

;; (deftest block-fork
;;   (let [board [["O" "X" "X"] 
;;                ["X" "B" "B"] 
;;                ["O" "B" "B"]]
;;         move ((ai/evaluate-moves-deep board "X" 5 "X") :move)]
;;     (is (= move [1 1] )  )))


(set! *main-cli-fn* #(t/run-tests))
