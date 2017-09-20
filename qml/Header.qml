import QtQuick 2.0
import "components"

Item {
    id: root

    height: 80

    property bool hamburger: false
    property alias model: itemView.model
    property int selection: 0

    signal menuClicked()

    Row {
        anchors {
            right: parent.right
            verticalCenter: parent.verticalCenter
            margins: parent.width * 0.04
        }

        spacing: 10
        visible: !root.hamburger

        Repeater {
            id: itemView

            Item {
                id: itemRoot

                width: itemText.width + 20
                height: 40

                focus: root.selection === index
                visible: index > 0

                signal clicked()

                Rectangle {
                    anchors.fill: parent

                    color: "black"
                    opacity: itemArea.containsMouse ? 0.25 : 0
                    radius: height * 0.1

                    Behavior on opacity {
                        NumberAnimation {
                        }
                    }
                }

                Label {
                    id: itemText

                    anchors.centerIn: parent

                    color: (itemArea.containsPress || itemRoot.focus) ? "black" : "white"
                    font.bold: true
                    horizontalAlignment: Text.AlignHCenter
                    style: (itemArea.containsPress || itemRoot.focus) ? Text.Normal : Text.Outline
                    styleColor: "#204060"
                    text: name
                }

                MouseArea {
                    id: itemArea

                    anchors.fill: parent

                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true

                    onClicked: root.selection = index
                }
            }
        }
    }

    ImageButton {
        anchors {
            right: parent.right
            verticalCenter: parent.verticalCenter
            margins: parent.width * 0.04
        }

        source: "../img/mono/menu.png"
        visible: root.hamburger

        onClicked: root.menuClicked()
    }
}

