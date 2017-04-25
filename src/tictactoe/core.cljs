(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def board-size 3)
(def winning-k 3)
; (def player "X")
; (def computer "O")
; (def blank "B")

(defn new-board
  [n]
  (vec (repeat n (vec (repeat n "B")))))

(defonce app-state (atom {:text "Welocome to tic-tac-toe!!"
                          :board (new-board board-size)
                          :status :in-progress}))

(defn free-spots [board]
  (for  [i (range board-size)
         j (range board-size)
        :when (= (get-in board [i j]) "B")]
        [i j]))

(defn draw? [board]
  (empty? (free-spots board)))

(defn vertical [board y]
  (board y))

(defn horizontal [board x]
  (for [i (range board-size)] (get-in board [i x])))

(defn diagonal-down [board]
  (for [i (range board-size)] (get-in board [i i])))

(defn diagonal-up [board]
  (for [i (range board-size)] (get-in board [i (- (dec board-size) i)])))

(defn all-lines [board]
  (concat  [(diagonal-down board) (diagonal-up board)]
    (for [i (range board-size)] (horizontal board i))
    (for [i (range board-size)] (vertical board i))))

(defn vertical-coords [y]
  (map #(vector % y) (range board-size)))

(defn horizontal-coords [x]
  (map #(-> % rseq vec) (vertical-coords x)))

(defn diagonal-down-coords []
  (for [i (range board-size)]  [i i]))

(defn diagonal-up-coords []
  (for [i (range board-size)] [i (- (dec board-size) i)]))

(defn all-lines-coords []
  (concat  [(diagonal-down board) (diagonal-up board)]
    (for [i (range board-size)] (horizontal board i))
    (for [i (range board-size)] (vertical board i))))

(defn winning-by? [player line]
  (every? #(= % player) (take winning-k line)))

(defn winning? [board player]
  (some (partial winning-by? player) (all-lines board) ))

(defn game-status []
  (let [board (:board @app-state)]
  (cond
    (winning? board "O") :computer-win
    (winning? board "X") :player-win
    (draw? board ) :draw
    :else :in-progress)))

(defn computer-move [board]
  (let [move (rand-nth (free-spots board))]
    (assoc-in board move "O")))

(defn block-attempt [board]
  ())

(defn blank [i j]
      [:rect {:width 0.95
              :height 0.95
              :x i
              :y j
              :fill (if (= "B" (get-in @app-state [:board i j]))
                        "lightgray")
              :on-click
              (fn rect-click [e]
                (swap! app-state assoc-in [:board i j] "X" )
                (swap! app-state assoc :status (game-status))
                (if (= (:status @app-state) :in-progress)
                  ((swap! app-state assoc :board (computer-move (:board @app-state)))
                  (swap! app-state assoc :status (game-status)))))}])

(defn circle [i j]
  [:circle {:r 0.40 :fill "none" :stroke-width 0.05 :stroke "darkred"
    :cx (+ 0.5 i) :cy (+ 0.5 j)}])

(defn cross [i j]
  [:g
    {:stroke "green" :stroke-width 0.1 :stroke-linecap "round"
    :transform (str "translate(" (+ 0.5 i) "," (+ 0.5 j) ") " "scale(0.33)")}
    [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
    [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])

(defn tic-tac-toe []
  [:center
    [:h1 (:text @app-state)]
    [:h3 (case (:status @app-state)
                :in-progress "Your move"
                :player-win "You win"
                :computer-win "You lose"
                :draw "Draw"
                "")]
    [:svg
      {:view-box ( str "0 0 " board-size " " board-size) :width 500 :height 500}
      (for [i (range board-size)
            j (range board-size)]
            (case (get-in @app-state [:board i j])
              "B" [blank i j]
              "O" [circle i j]
              "X" [cross i j]))]
    [:p
      [:button
        {:on-click
          (fn new-game-click [e]
            (swap! app-state assoc :board (new-board board-size))
            (swap! app-state assoc :status :in-progress))}
        "New Game"]]])

(reagent/render-component [tic-tac-toe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  (prn (:board @app-state)))
