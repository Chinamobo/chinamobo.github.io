#!/bin/sh

cd $(dirname $0)
echo "Start jekyll in $(pwd)"
bundle exec jekyll -w server --drafts
