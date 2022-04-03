const args = process.argv.slice(2);
const os = require('os');
const { str } = require('./storage');
const exec = require('child_process').exec;

exec(`git add . && git commit -m "ya" && git push`, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
    console.log(stderr);
});