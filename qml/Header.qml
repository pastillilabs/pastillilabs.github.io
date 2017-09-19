import QtQuick 2.0
import "components"

Item {
    id: root

    height: 80

    property bool hamburger: false
    property alias model: itemView.model
    property int selection: 0

    signal menuClicked()

    Item {
        anchors.fill: parent

        Item {
            width: parent.height
            height: parent.height

            ImageButton {
                width: parent.width * 3
                height: parent.height * 3
                anchors.centerIn: parent

                source: "../img/mono/situations.png"

                onClicked: root.selection = 0
            }
        }

        Row {
            anchors {
                right: parent.right
                verticalCenter: parent.verticalCenter
                margins: parent.width * 0.04
            }

            spacing: 10
            visible: !root.hamburger

            Repeater {
                id: itemView

                HeaderItem {
                    focused: root.selection === index
                    text: name
                    visible: index > 0

                    onClicked: root.selection = index
                }
            }
        }

        ImageButton {
            anchors {
                right: parent.right
                verticalCenter: parent.verticalCenter
                margins: parent.width * 0.04
            }

            source: "../img/mono/menu.png"
            visible: root.hamburger

            onClicked: root.menuClicked()
        }
    }
}

