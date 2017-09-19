import QtQuick 2.0
import "components"

Item {
    implicitHeight: 60

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

            source: "../img/mono/pastillilabs.png"
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

        RoundButton {
            width: 40
            height: 40
            source: "../img/mono/twitter.png"

            onClicked: Qt.openUrlExternally("https://www.twitter.com/situationsapp")
        }

        RoundButton {
            width: 40
            height: 40
            source: "../img/mono/facebook.png"

            onClicked: Qt.openUrlExternally("https://www.facebook.com/situationsapp")
        }

        RoundButton {
            width: 40
            height: 40
            source: "../img/mono/mail.png"

            onClicked: Qt.openUrlExternally("mailto:support@pastillilabs.com")
        }
    }
}

