import QtQuick 2.0
import "../components"

Item {
    id: root

    property bool mobile: width < 500 || height < 500

    onMobileChanged: label.font.pixelSize = (mobile ? 30 : 40)

    Rectangle {
        height: column.height + (root.mobile ? 80 : 100)
        anchors {
            left: parent.left
            right: parent.right
            verticalCenter: parent.verticalCenter
        }

        border {
            color: "black"
            width: 1
        }
        color: "#203040"
        opacity: 0.5
    }

    Column {
        id: column
        
        anchors {
            left: parent.left
            right: parent.right
            verticalCenter: parent.verticalCenter
            margins: root.width * 0.1
        }

        spacing: 40

        Label {
            id: label

            anchors {
                left: parent.left
                right: parent.right
            }

            font.pixelSize: 40
            horizontalAlignment: Text.AlignHCenter
            text: "Put the smart on your smartphone!"
            wrapMode: Text.WordWrap
        }

        ImageButton {
            width: 202
            height: 60
            anchors.horizontalCenter: parent.horizontalCenter

            source: "../../img/en-play-badge.png"

            onClicked: Qt.openUrlExternally("https://play.google.com/store/apps/details?id=com.pastillilabs.situations2")
        }
    }
}

