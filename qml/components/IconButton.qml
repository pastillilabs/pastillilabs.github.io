import QtQuick 2.0

Item {
    implicitWidth: 40
    implicitHeight: 40

    property alias source: imageItem.source

    signal clicked()

    Image {
        id: imageItem

        anchors.fill: parent

        opacity: mouseArea.pressed ? 0.5 : 1
    }

    MouseArea {
        id: mouseArea

        anchors.fill: parent

        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true

        onClicked: parent.clicked()
    }
}

