const args = process.argv.slice(2);
const os = require('os');
const { Exec } = require('./bash');
const { str } = require('./storage');
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('siapa aku: ', nama => {
//     console.log(`Halo ${nama}`);
//     readline.close();
// })

let dir = `
DIR=""
if [[ $0 == *"./"* ]]; then
    DIR="./"
else
    DIR=$(which node)
    LIB=$(echo "$DIR" | sed -e 's/\/bin\/node//g')
    DIR="$LIB/lib/node_modules/bagas"
fi
echo $DIR
`


; (async () => {
    let directory = (await Exec(`./bagas.sh`)).stdout;
    console.log(directory.trim());
})()

// exec(`git add . && git commit -m "ya" && git push`, (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stdout);
//     console.log(stderr);
// });