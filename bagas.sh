#!/usr/bin/env bash
DIR=""
if [[ $0 == *"./"* ]]; then
    DIR="./"
else
    DIR=$(which node)
    LIB=$(echo "$DIR" | sed -e 's/\/bin\/node//g')
    DIR="$LIB/lib/node_modules/bagas"
fi

node $DIR "apa ini"
