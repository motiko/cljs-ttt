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

(defn tic-tac-toe []
  [:center
    [:h1 (:text @app-state)]
    [:svg
      {:view-box "0 0 3 3" :width 500 :height 500}
      (for [i (range (count (:board @app-state)))
            j (range (count (:board @app-state)))]
      [:rect {:width 0.9
              :height 0.9
              :x i
              :y j
              :fill "green"
              :on-click
              (fn rect-click [e]
                (prn "You clicked me" i j)
                (prn (swap! app-state update-in [:board i j] inc ))
                )}])
      ]])
(reagent/render-component [tic-tac-toe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state assoc-in [:text] "Hello")

)