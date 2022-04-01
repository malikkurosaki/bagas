_autoload() {
   
    for file in $(find . -name "./lib/_*.sh" -type f); do
        source $file
    done
    _menu
}
