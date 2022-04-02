_autoload() {
    for file in $(find ./lib -name "_*.sh" -type f); do
        source $file
    done
    _menu
}

