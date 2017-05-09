# tictactoe

Tic tac toe

## Overview

+ [Play Live](https://motiko.github.io/cljs-ttt)  
+ Watch Timothy Pratley's tutorial [on youtube](https://www.youtube.com/watch?v=pIiOgTwjbes)  
+ Demo project following a guide to familiarize with cjs, reagent, and hiccup

## Build

```bash
lein cljsbuild auto dev dev-worker
cd resources/public
python -m SimpleHTTPServer
```

## Test

```bash
lein cljsbuild test
```

## Deploy

```bash
git subtree split --prefix resources/public -b gh-pages
```
