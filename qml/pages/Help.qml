import QtQuick 2.0
import "../components"

Item {
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

            horizontalAlignment: Text.AlignHCenter
            text: "HELP TODO"
            wrapMode: Text.Wrap
        }
    }
}

