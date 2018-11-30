#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
cp ../.circleci . -r
git init
git config --global user.email $GIT_MAIL
git config --global user.name $GIT_USER
git add -A
git commit -m "deploy #${CIRCLE_BUILD_NUM}"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:drunknzombiecow/vuetodo.git master:gh-pages

cd -
