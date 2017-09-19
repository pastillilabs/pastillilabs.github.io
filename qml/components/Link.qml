import QtQuick 2.0

Item {
    width: linkText.width
    height: linkText.height

    property string url: ""
    property alias text: linkText.text

    signal clicked()

    Label {
        id: linkText

        font.underline: mouseArea.containsMouse
    }

    MouseArea {
        id: mouseArea

        anchors.fill: parent

        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true

        onClicked: Qt.openUrlExternally(parent.url)
    }
}

