import QtQuick 2.0

Item {
    height: 40

    property bool focused: false
    property alias text: itemText.text

    signal clicked()

    Label {
        id: itemText

        anchors.centerIn: parent

        font {
            bold: true
            pixelSize: 30
        }
        horizontalAlignment: Text.AlignHCenter
        color: mouseArea.pressed || parent.focused ? "#a0c0e0" : "white"
    }

    MouseArea {
        id: mouseArea

        anchors.fill: parent

        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true

        onClicked: parent.clicked()
    }
}

