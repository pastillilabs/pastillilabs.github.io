import QtQuick 2.0

Item {
    id: root

    property alias model: itemView.model
    property int selection: 0

    signal clicked(variant index)

    onClicked: selection = index

    Rectangle {
        anchors.fill: parent

        color: "black"
        opacity: 0.5
    }

    MouseArea {
        anchors.fill: parent
    }

    Column {
        anchors {
            left: parent.left
            right: parent.right
            top: parent.top
            bottom: parent.bottom
            margins: 50
        }

        spacing: 20

        Repeater {
            id: itemView

            Item {
                id: itemRoot

                height: 40
                anchors {
                    left: parent.left
                    right: parent.right
                }

                Label {
                    id: itemLabel

                    anchors.centerIn: parent

                    font {
                        bold: true
                        pixelSize: 30
                    }
                    color: (itemArea.containsPress || root.selection === index) ? "#a0c0e0" : "white"
                    horizontalAlignment: Text.AlignHCenter
                    text: name
                }

                MouseArea {
                    id: itemArea

                    anchors.fill: parent

                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true

                    onClicked: root.clicked(index)
                }
            }
        }
    }
}

