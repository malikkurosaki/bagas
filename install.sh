data='#!/usr/bin/env bash
. <(curl -s "https://raw.githubusercontent.com/malikkurosaki/bagas/main/xbin/autoload.sh")
_autoload'

echo "$data" >/usr/bin/bagas
chmod +x /usr/bin/bagas
echo "instal bagas berhasil !"
