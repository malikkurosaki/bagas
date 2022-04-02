#!/usr/bin/env bash
node -e "
const color = require('./node_modules/colors');
console.log('Hello World'.rainbow);
"

if [ $# > 0 ]; then
    data=$($1)
    echo $data
fi