import QtQuick 2.0
import QtQuick.Controls 1.0
import QtQuick.Window 2.0
import "sections"

Window {
    id: root

    width: 480
    height: 640

    Background {
        anchors.fill: parent
    }

    ScrollView {
        anchors.fill: parent

        horizontalScrollBarPolicy: Qt.ScrollBarAlwaysOff
        verticalScrollBarPolicy: Qt.ScrollBarAsNeeded

        Column {
            width: root.width

            Banner {
                anchors {
                    left: parent.left
                    right: parent.right
                }

                height: root.height
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

