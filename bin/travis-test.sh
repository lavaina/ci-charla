#!/bin/bash -e

cd $TRAVIS_BUILD_DIR/todos
spacejam test-packages packages/common

# TODO: Juan - run functional tests
