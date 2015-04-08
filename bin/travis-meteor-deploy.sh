#!/bin/bash -e

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" ]]; then
  cd $TRAVIS_BUILD_DIR/todos
  meteor deploy stage-lavaina
fi

# This only works in private repos. Public repos need a deploy key
TAG_NAME="build/$TRAVIS_BUILD_NUMBER"
git tag "$TAG_NAME"
git push origin $TAG_NAME
