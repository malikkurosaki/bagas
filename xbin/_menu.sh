_menu() {
    _green "
    Menu:

    "
    _yellow "q | Quit | CTRL+C untuk keluar"
    _cyan "Pilih Menu"
    read -p ": " menu
    while true; do
        case $menu in
        g | git)
            _git
            ;;
        q | quit)
            exit 0
            ;;
        *)
            _red "menu belum ada"
            ;;
        esac
    done
}
