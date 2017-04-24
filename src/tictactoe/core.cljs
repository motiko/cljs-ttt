(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defn new-board
  [n]
  (vec (repeat n (vec (repeat n "B")))))

(def board-size 3)

(defonce app-state (atom {:text "Welocome to tic-tac-toe!!"
                          :board (new-board board-size)}))



(prn (new-board board-size))

(defn free-spots []
  (let [board (:board @app-state)]
  (for  [i (range board-size)
         j (range board-size)
        :when (= (get-in board [i j]) "B")]
        [i j])))

(defn computer-move []
  (let [move (rand-nth (free-spots))
        coords (into [:board] move)]
    (prn "?? ")
    (swap! app-state assoc-in coords "X")
    (prn coords)
    ))

(defn blank [i j]
      [:rect {:width 0.95
              :height 0.95
              :x i
              :y j
              :fill (if (= "B" (get-in @app-state [:board i j]))
                        "green" "yellow")
              :on-click
              (fn rect-click [e]
                (prn "You clicked me" i j)
                (prn (swap! app-state assoc-in [:board i j] "O" )
                (computer-move)
                ))}])

(defn circle [i j]
  [:circle {:r 0.45
    :cx (+ 0.5 i) :cy (+ 0.5 j)}])

(defn cross [i j]
  [:g
    {:stroke "black" :stroke-width 0.2 :stroke-linecap "round"
    :transform (str "translate(" (+ 0.5 i) "," (+ 0.5 j) ") " "scale(0.33)")}
    [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
    [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])

(defn tic-tac-toe []
  [:center
    [:h1 (:text @app-state)]
    [:svg
      {:view-box ( str "0 0 " board-size " " board-size) :width 500 :height 500}
      (for [i (range (count (:board @app-state)))
            j (range (count (:board @app-state)))]
            (case (get-in @app-state [:board i j])
              "B" [blank i j]
              "O" [circle i j]
              "X" [cross i j]))]
    [:p
      [:button
        {:on-click
          (fn new-game-click [e]
            (swap! app-state assoc :board (new-board board-size)) )} "New Game"]]])

(reagent/render-component [tic-tac-toe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state assoc-in [:text] "Hello")
  (prn (:board @app-state)))
