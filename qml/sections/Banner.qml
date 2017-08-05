import QtQuick 2.0

Item {
    implicitWidth: 480
    implicitHeight: 640

    Column {
        anchors {
            left: parent.left
            right: parent.right
            verticalCenter: parent.verticalCenter
            margins: root.width / 20
        }

        spacing: 20

        Text {
            anchors {
                left: parent.left
                right: parent.right
            }

            color: "white"
            horizontalAlignment: Text.AlignHCenter
            font.pixelSize: 40
            text: "Put The Smart on your smart device!"
            wrapMode: Text.WordWrap
        }

        Image {
            width: 202
            height: 60
            anchors.horizontalCenter: parent.horizontalCenter

            source: "../../img/en-play-badge.png"

//            onClicked: Qt.openUrlExternally("https://play.google.com/store/apps/details?id=com.pastillilabs.situations2")
        }
    }
}

