import QtQuick 2.0
import "../components"

Item {
    id: root
    
    Rectangle {
        height: column.height + 100
        anchors {
            left: parent.left
            right: parent.right
            verticalCenter: parent.verticalCenter
        }

        border {
            color: "#204050"
            width: 1
        }
        color: "#405060"
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

