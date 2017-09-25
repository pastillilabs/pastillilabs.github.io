import QtQuick 2.0
import "../components"

Item {
    id: root

    property alias contentHeight: column.height
    property bool mobile: false

    onMobileChanged: label.font.pixelSize = (mobile ? 30 : 40)

    Column {
        id: column

        anchors {
            left: parent.left
            right: parent.right
            margins: parent.width * 0.1
            verticalCenter: parent.verticalCenter
        }

        spacing: root.mobile ? 20 : 40

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

