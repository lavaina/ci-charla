#!/bin/bash -e

cd $TRAVIS_BUILD_DIR/todos
spacejam test-packages packages/common

meteor deploy ci-lavaina

cd $TRAVIS_BUILD_DIR/tests
protractor conf.js --all --sauce
