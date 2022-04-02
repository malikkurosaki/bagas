node -e "
const color = require('./node_modules/colors');
console.log('Hello World'.rainbow);
"
for file in $(find . -name "_*.sh" -type f); do
    source $file
done
_menu
