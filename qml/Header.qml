import QtQuick 2.0
import "components"

Item {
    id: root

    height: 80

    property Dropdown dropdownItem
    property alias homeIconSource: homeButton.source
    property bool mobile: false
    property alias model: itemView.model
    property int selection: 0

    onMobileChanged: dropdownItem.visible = false
    onSelectionChanged: dropdownItem.visible = false

    Item {
        anchors.fill: parent

        Item {
            width: parent.height
            height: parent.height

            ImageButton {
                id: homeButton

                width: parent.width * 3
                height: parent.height * 3
                anchors.centerIn: parent

                onClicked: {
                    dropdownItem.visible = false;
                    selection = 0;
                }
            }
        }

        Row {
            anchors {
                right: parent.right
                verticalCenter: parent.verticalCenter
                margins: parent.width * 0.04
            }

            spacing: 10
            visible: !mobile

            Repeater {
                id: itemView

                HeaderItem {
                    focused: root.selection === index
                    text: name
                    visible: index > 0

                    onClicked: selection = index
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
            visible: mobile

            onClicked: dropdownItem.visible = !dropdownItem.visible
        }
    }
}

