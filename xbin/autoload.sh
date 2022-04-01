_autoload() {
    for file in $(find . -name "_*.sh" -type f); do
        . $file
    done
    echo "menu"
    _menu
}
