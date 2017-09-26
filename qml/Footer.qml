import QtQuick 2.0
import "components"

Item {
    id: root

    implicitHeight: 60

    visible: !mobile

    property ListModel contactLinks: ListModel {}
    property string imgBase: ""
    property bool mobile: false

    Row {
        anchors {
            left: parent.left
            verticalCenter: parent.verticalCenter
            margins: 30
        }

        spacing: 10

        Image {
            width: 30
            height: 30

            source: imgBase + "mono/pastillilabs.png"
        }

        Label {
            anchors.verticalCenter: parent.verticalCenter

            font.pixelSize: 14
            text: "Pastilli Labs"
        }
    }

    Row {
        anchors {
            right: parent.right
            verticalCenter: parent.verticalCenter
            margins: 30
        }

        spacing: 30

        Repeater {
            model: root.contactLinks

            RoundButton {
                width: 40
                height: 40
                source: imgBase + icon

                onClicked: Qt.openUrlExternally(target)
            }
        }
    }
}

