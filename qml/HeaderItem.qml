import QtQuick 2.0
import "components"

Item {
    width: buttonText.width + 20
    height: 40

    property bool focused: false
    property alias text: buttonText.text

    signal clicked()

    Rectangle {
        id: bg

        anchors.fill: parent

        color: "black"
        opacity: mouseArea.containsMouse ? 0.25 : 0
        radius: height * 0.1

        Behavior on opacity {
            NumberAnimation { duration: 200 }
        }
    }

    Label {
        id: buttonText

        anchors.centerIn: parent

        color: mouseArea.containsPress || parent.focused ? "black" : "white"
        font.bold: true
        horizontalAlignment: Text.AlignHCenter
        style: parent.focused ? Text.Normal : Text.Outline
        styleColor: "#6080a0"
    }

    MouseArea {
        id: mouseArea

        anchors.fill: parent

        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true

        onClicked: parent.clicked()
    }
}

