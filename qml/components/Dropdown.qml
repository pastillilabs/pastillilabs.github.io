import QtQuick 2.0

Item {
    id: root

    property alias model: itemView.model
    property int selection: 0

    signal clicked(variant index)

    onClicked: selection = index

    Rectangle {
        anchors.fill: parent

        color: "black"
        opacity: 0.25
    }

    MouseArea {
        anchors.fill: parent
    }

    Column {
        anchors {
            left: parent.left
            right: parent.right
            top: parent.top
            bottom: parent.bottom
            margins: 50
        }

        spacing: 20

        Repeater {
            id: itemView

            DropdownItem {
                width: parent.width

                focused: root.selection === index
                text: name
                visible: index > 0

                onClicked: root.clicked(index)
            }
        }
    }
}

