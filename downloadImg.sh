#!/usr/bin/env bash
while true; do
    # if [ $# -lt 2 ]
    # then
    #     echo "No enough argument supplied"
    #     echo "nome:"
    #     read NAME
    #     echo "link"
    #     read LINK
    # else
    #     NAME=$1
    #     LINK=$2
    # fi
    echo "nome:"
    read NAME
    echo "link"
    read LINK

    INVENT="./angular-med-store/src/app/data/inventario.json"

    OLD="\"nome\": \"$NAME\","
    IMGNAME=${NAME// /-}

    NEW="    \"imgPath\": \"assets/img/$IMGNAME.jpg\""

    IMG="./angular-med-store/src/assets/img/$IMGNAME.jpg"
    wget -O $IMG $LINK
    LINE=$(grep -rnw $INVENT -e "$OLD" | cut -f1 -d:)
    ELINE=$(($LINE+3))
    sed -i "${ELINE}s|.*|$NEW|" $INVENT

done