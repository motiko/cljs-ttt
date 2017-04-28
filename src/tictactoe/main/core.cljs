(ns tictactoe.main.core
  (:require [reagent.core :as reagent ]
            [butler.core :as butler]
            [tictactoe.workers.ai :as ai :refer [winning? draw?]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def board-size 3)
(def winning-k 3)

(def ^:const worker-script-path "js/compiled/worker.js")

(defn analyze-result-handler [[x y]]
  (swap! app-state assoc-in [:board x y] "O")
  (swap! app-state assoc :status (game-status)))

(def ai-butler (butler/butler worker-script-path {:analyze-result analyze-result-handler}))

(defn new-board [n]
  (vec (repeat n (vec (repeat n "B")))))

(defonce app-state (reagent/atom {:text "Welocome to tic-tac-toe!!"
                          :board (new-board board-size)
                          :status :in-progress}))

(defn computer-move [board]
  (let [move (ai/find-best-move board)]
    (assoc-in board move "O")))

(defn game-status []
  (let [board (:board @app-state)]
    (cond
     (ai/winning? board "O") :computer-win
     (ai/winning? board "X") :player-win
     (draw? board ) :draw
     :else :in-progress)))

(defn on-rect-click [i j]
  (fn rect-click [e]
    (when (= (:status @app-state) :in-progress) 
      (swap! app-state assoc-in [:board i j] "X" )
      (when (= (game-status) :in-progress)
        (swap! app-state assoc :status :thinking) 
        (butler/work! ai-butler :request-analyze (:board @app-state))))))

(defn blank [i j]
  [:rect {:width 0.95
          :height 0.95
          :x i
          :y j
          :fill (if (= "B" (get-in @app-state [:board i j]))
                  "lightgray")
          :on-click (on-rect-click i j)
          }])

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
          :thinking "Thinking.."
          :player-win "You win"
          :computer-win "You lose"
          :draw "Draw"
          "")]
   [:svg
    {:view-box ( str "0 0 " board-size " " board-size) :width 500 :height 500}
    (doall (for [i (range board-size)
                  j (range board-size)]
              (case (get-in @app-state [:board i j])
                "B" ^{:key (str i j)} [blank i j]
                "O" ^{:key (str i j)} [circle i j]
                "X" ^{:key (str i j)} [cross i j])))]
   [:p
    [:button
     {:on-click
      (fn new-game-click [e]
        (swap! app-state assoc :board (new-board board-size))
        (swap! app-state assoc :status :in-progress))}
     "New Game"]]
   [:p
    [:button
     {:on-click #(prn "QWE")}
     "Think Worker"]]])

(reagent/render-component [tic-tac-toe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  (prn (:status @app-state)))
