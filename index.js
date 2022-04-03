const args = process.argv.slice(2);
const os = require('os');
const { Exec } = require('./bash');
const { str } = require('./storage');

 ;(async() => {
     let {stdout} = await  Exec(`git add . && git commit -m "ok" && git push`);
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