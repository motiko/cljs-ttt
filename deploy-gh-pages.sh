#/bin/sh
lein cljsbuild once dev dev-worker
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
git subtree split --prefix resources/public -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
