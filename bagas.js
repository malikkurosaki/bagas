#!/usr/bin/env node
const der = process.argv.slice(1)[0];
let dir = "/node_modules/";
if (der.includes(".js")) {
    dir = der.replace("bagas.js", "node_modules/");
}else{
    dir = der.replace('/bin/bagas', '/lib')+"/node_modules/bagas/node_modules/";
}


// async function baca() {
//     let readline = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     readline.question('siapa aku: ', nama => {
//         console.log(`Halo ${nama}`);
//         readline.close();
//     })
// }

; (async () => {
    // // console.log(dir)
    // const { Exec } = require('./bash');
    // let directory = (await Exec(`ls ${dir}colors`)).stdout;
    // console.log(directory.trim());

    const color = require(``);
    console.log("hijau".green)

    
})()



// # DIR=""
// # if [[ $0 == *"./"* ]]; then
// #     DIR="./"
// # else
// #     DIR=$(which node)
// #     LIB=$(echo "$DIR" | sed -e 's/\/bin\/node//g')
// #     DIR="$LIB/lib/node_modules/bagas"
// # fi

// # node $DIR "apa ini"
// echo "ini bagas"