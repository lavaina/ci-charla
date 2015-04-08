#!/bin/bash -e

cd $TRAVIS_BUILD_DIR/todos
spacejam test-packages packages/common

meteor deploy ci-lavaina
# TODO: Juan - run functional tests
