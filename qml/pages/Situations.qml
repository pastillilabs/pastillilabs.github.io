import QtQuick 2.0
import "../components"

Item {
    id: root

    property alias contentHeight: column.height
    property bool mobile: false

    Column {
        id: column

        anchors {
            left: parent.left
            right: parent.right
            margins: parent.width * 0.1
            verticalCenter: parent.verticalCenter
        }

        Label {
            anchors {
                left: parent.left
                right: parent.right
            }

            horizontalAlignment: Text.AlignHCenter
            text: "SITUATIONS TODO"
            wrapMode: Text.Wrap
        }
    }
}

