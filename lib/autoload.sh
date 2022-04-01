_autoload() {
    pwd
    for file in $(find . -name "_*.sh" -type f); do
        . $file
    done
    #_menu
}
