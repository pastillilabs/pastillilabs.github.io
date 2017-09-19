import QtQuick 2.0

Item {
    id: itemRoot

    implicitHeight: 40

    property bool focused: false
    property alias text: itemLabel.text

    signal clicked()

    Label {
        id: itemLabel

        anchors.centerIn: parent

        font {
            bold: true
            pixelSize: 30
        }
        horizontalAlignment: Text.AlignHCenter
        color: (itemArea.pressed || itemRoot.focused) ? "#a0c0e0" : "white"
    }

    MouseArea {
        id: itemArea

        anchors.fill: parent

        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true

        onClicked: itemRoot.clicked()
    }
}

