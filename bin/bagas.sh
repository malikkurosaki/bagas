#!/usr/bin/env bash
source <(curl -s "https://raw.githubusercontent.com/malikkurosaki/bagas/main/lib/autoload.sh")
# node -e "console.log(require('fs').readFileSync('./lib/autoload.sh', 'utf8'))" | source /dev/stdin
if [ $# > 0 ]; then
    data=$($1)
    echo $data
fi
