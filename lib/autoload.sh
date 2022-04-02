pwd
for file in $(find . -name "_*.sh" -type f); do
    source $file
done
_menu
