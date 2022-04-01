_git() {
    pwd
    _green "
    Git:
    Perintah pada git 
    push,           untuk mengirimkan data ke remote
    pull,           untuk menerima data dari remote
    status,         untuk melihat status dari local dan remote
    log,            untuk melihat log dari remote
    remote,         untuk melihat remote yang tersedia
    branch,         untuk melihat branch yang tersedia
    checkout,       untuk mengecekout branch
    merge,          untuk melakukan merge
    rebase,         untuk melakukan rebase
    fetch,          untuk melakukan fetch
    reset,          untuk melakukan reset

    "
    _yellow "q | Quit | CTRL+C untuk keluar"
    _cyan "Pilih Menu Git"
    read -p ": " menu
    while true; do
        case $menu in
        g | git)
            _git
            ;;
        q | quit)
            _cyan "bye ..."
            exit 0
            ;;
        *)
            _red "menu belum ada"
            ;;
        esac
    done
}
