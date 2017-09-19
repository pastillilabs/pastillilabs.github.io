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
            text: "Situations app is developed by Pastilli Labs."
            wrapMode: Text.Wrap
        }

        Label {
            anchors {
                left: parent.left
                right: parent.right
            }

            horizontalAlignment: Text.AlignHCenter
            text: "Our vision is to craft software EASY to understand and use by anyone - yet POWERFUL enough for advanced users also."
            wrapMode: Text.Wrap
        }
    }
}

