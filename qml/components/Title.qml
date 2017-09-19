import QtQuick 2.0

Item {
    height: Math.max(iconItem.height, textItem.height)
    anchors {
        left: parent ? parent.left : undefined
        right: parent ? parent.right : undefined
    }

    property alias icon: iconItem.source
    property alias text: textItem.text

    Image {
        id: iconItem

        width: source ? 50 : 0
        height: width
        anchors.verticalCenter: parent.verticalCenter
    }

    Text {
        id: textItem

        anchors {
            left: iconItem.right
            right: parent.right
            leftMargin: 10
            verticalCenter: parent.verticalCenter
        }

        color: "white"
        font {
            bold: true
            family: "Arial"
            pixelSize: 34
        }
        wrapMode: Text.WordWrap
    }
}


