_menu() {
    _green "
    Menu:

    "
    _cyan "Pilih Menu"
    read -p ": " menu
    while true; do
        case $menu in
        *)
            _red "menu belum ada"
            ;;
        esac
    done
}
