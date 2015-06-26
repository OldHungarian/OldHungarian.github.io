#!/usr/bin/env bash

set -e

CURRENT_BRANCH=`git rev-parse HEAD`

rm -rf temp

bower install
compass compile

mkdir -p temp
cp -a stylesheets temp
cp -a bower_components temp
cp -a js temp
cp *.txt temp
cp *.html temp
cp *.md temp
cp CNAME temp
cp LICENSE temp

git checkout master

cp -a temp/* .

rm -rf temp

git add .
git commit -a -m "Generated based on ${CURRENT_BRANCH}"

git checkout source
