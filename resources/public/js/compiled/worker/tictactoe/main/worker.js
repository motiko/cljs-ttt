// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.main.worker');
goog.require('cljs.core');
goog.require('butler.core');
goog.require('tictactoe.ai.minimax');
tictactoe.main.worker.analyze_handler = (function tictactoe$main$worker$analyze_handler(board){
return butler.core.bring_BANG_.call(null,new cljs.core.Keyword(null,"analyze-result","analyze-result",1074901422),tictactoe.ai.minimax.find_best_move.call(null,board));
});
butler.core.serve_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-analyze","request-analyze",-185801518),tictactoe.main.worker.analyze_handler], null));
