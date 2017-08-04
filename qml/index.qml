import QtQuick 2.0
import QtQuick.Controls 1.0

Rectangle {
    id: root

    width: 480
    height: 640

    color: "#6080a0"

    ScrollView {
        anchors.fill: parent

        horizontalScrollBarPolicy: Qt.ScrollBarAlwaysOff
        verticalScrollBarPolicy: Qt.ScrollBarAsNeeded

        Column {
            width: root.width

            Item {
                anchors {
                    left: parent.left
                    right: parent.right
                }

                height: root.height

                Text {
                    anchors.centerIn: parent

                    color: "white"
                    font.pixelSize: 40
                    text: "Hello world!"
                }
            }

            Item {
                anchors {
                    left: parent.left
                    right: parent.right
                }

                height: Math.max(root.height, testContent.height)

                Rectangle {
                    id: testContent

                    width: 100
                    height: 100
                    anchors.centerIn: parent

                    color: "green"
                }
            }
        }
    }
}

