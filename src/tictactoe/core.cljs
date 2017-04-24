(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defn new-board
  [n]
  (vec (repeat n (vec (repeat n 0)))))

(prn (new-board 3))

(defonce app-state (atom {:text "Welocome to tic-tac-toe!"
                          :board (new-board 3)}))
(defn blank [i j]
      [:rect {:width 0.95
              :height 0.95
              :x i
              :y j
              :fill (if (zero? (get-in @app-state [:board i j]))
                        "green" "yellow")
              :on-click
              (fn rect-click [e]
                (prn "You clicked me" i j)
                (prn (swap! app-state update-in [:board i j] inc )))}])

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
      {:view-box "0 0 3 3" :width 500 :height 500}
      (for [i (range (count (:board @app-state)))
            j (range (count (:board @app-state)))]
            (case (get-in @app-state [:board i j])
              0 [blank i j]
              1 [circle i j]
              2 [cross i j])
      )
      ]])

(reagent/render-component [tic-tac-toe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state assoc-in [:text] "Hello")
  (prn (:board @app-state))
)
