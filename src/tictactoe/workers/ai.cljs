(ns tictactoe.workers.ai
  (:require [butler.core :as butler]))

(enable-console-print!)

(def winning-k 3)

(def X "X")
(def O "O")
(def B "B")

(def board-size 3)

(def opponent {"X" "O"
               "O" "X"})

(defn free-spots 
  ([board] (for  [i (range board-size)
                  j (range board-size)
                  :when (= (get-in board [i j]) "B")]
             [i j]))
  ([board line-coords] (filter 
                        #(= "B" (get-in board %)) line-coords )))

(defn draw? [board]
  (empty? (free-spots board)))

(defn vertical-coords [y]
  (map #(vector % y) (range board-size)))

(defn horizontal-coords [x]
  (map #(-> % rseq vec) (vertical-coords x)))

(defn diagonal-down-coords []
  (for [i (range board-size)]  [i i]))

(defn diagonal-up-coords []
  (for [i (range board-size)] [i (- (dec board-size) i)]))

(defn get-coords [board coords]
  (map #(get-in board %) coords))

(defn all-lines-coords []
  (concat  [(diagonal-down-coords) (diagonal-up-coords)]
           (for [i (range board-size)] (horizontal-coords i))
           (for [i (range board-size)] (vertical-coords i))))

(defn all-lines [board]
  (map #(get-coords board %)  (all-lines-coords)))

(defn winning-by? [player line]
  (every? #(= % player) (take winning-k line)))

(defn winning? [board player]
  (some (partial winning-by? player) (all-lines board) ))

(defn evaluate-board [board player]
  (cond (winning? board player) 1 
        (winning? board (opponent player)) -1
        (draw? board) 0 
        :else nil))

(defn evaluate-moves-deep [board player max-depth computer & last-move]
  (let [score (evaluate-board board computer)]
    (if (or score (< max-depth 0)) (hash-map :score score :move last-move) 
        (let [legal-moves  (map #(hash-map :board (assoc-in board % player) :move %) (free-spots board)) 
              evaluated-moves (map #(hash-map :score ((trampoline evaluate-moves-deep (% :board) (opponent player) 
                                                                 (dec max-depth) computer (% :move)) :score ) 
                                              :move (% :move)) legal-moves  )]
          (first (if (= player computer) 
                   (sort-by :score > evaluated-moves)
                   (sort-by :score < evaluated-moves)))))))

(defn find-best-move [board]
  ((evaluate-moves-deep board "O" 5 "O") :move ))

(defn analyze-handler [board]
  (butler/bring! :analyze-result (find-best-move board)))

(butler/serve! {:request-analyze analyze-handler})

