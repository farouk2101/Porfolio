#!/bin/bash
node_wanted_version="v24.12.0"
npm_wanted_version="11.6.2"

node_version="$(node --version)"
npm_version="$(npm --version)"

if [[ $node_version == $node_wanted_version && $npm_version == $npm_wanted_version ]];
  then
    ng new TBR --style=scss --skip-tests=true
    git clone https://github.com/farouk2101/Porfolio.git Portfolio
    mv TBR/node_modules Portfolio
    rm -rf TBR
  else
    echo "The versions of Node and npm are respectively: $node_version and $npm_version instead of $node_wanted_version and $npm_wanted_version"
  fi
