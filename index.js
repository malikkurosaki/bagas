const args = process.argv.slice(2);
const os = require('os');
const { Exec } = require('./bash');
const { str } = require('./storage');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('siapa aku', nama => {
    console.log(`Halo ${nama}`);
    readline.close();
})


; (async () => {
    let { stdout } = await Exec(`git add . && git commit -m "ok" && git push`);
    console.log(stdout.trim());
})()

// exec(`git add . && git commit -m "ya" && git push`, (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stdout);
//     console.log(stderr);
// });