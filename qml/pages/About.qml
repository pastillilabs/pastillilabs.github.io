import QtQuick 2.0
import "../components"

Item {
    id: root

    property alias contentHeight: column.height
    property bool mobile: false

    onMobileChanged: {
        var pixelSize = mobile ? 15 : 20;
        label1.font.pixelSize = pixelSize;
        label2.font.pixelSize = pixelSize;
    }

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
            id: label1

            anchors {
                left: parent.left
                right: parent.right
            }

            horizontalAlignment: Text.AlignHCenter
            text: "Situations is developed by Pastilli Labs."
            wrapMode: Text.Wrap
        }

        Label {
            id: label2

            anchors {
                left: parent.left
                right: parent.right
            }

            horizontalAlignment: Text.AlignHCenter
            text: "Our vision is to make software EASY to understand and use by anyone - yet POWERFUL enough for advanced users also."
            wrapMode: Text.Wrap
        }
    }

}

