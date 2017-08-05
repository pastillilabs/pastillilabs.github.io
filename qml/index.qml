import QtQuick 2.0
import QtQuick.Controls 1.0
import "sections" as Sections

Rectangle {
    id: root

    implicitWidth: 480
    implicitHeight: 640

    color: "#6080a0"

    Text {
        text: scrollView.flickableItem.contentY
    }

    ScrollView {
        id: scrollView

        anchors.fill: parent

        horizontalScrollBarPolicy: Qt.ScrollBarAlwaysOff
        verticalScrollBarPolicy: Qt.ScrollBarAsNeeded

        Column {
            width: root.width

            Sections.Banner {
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

