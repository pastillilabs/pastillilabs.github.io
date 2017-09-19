import QtQuick 2.0

Item {
    id: root
    
    implicitWidth: 60
    implicitHeight: 60

    property alias source: image.source

    signal clicked()
    
    Rectangle {
        id: hoverBackground
        
        width: size
        height: size
        anchors.centerIn: parent
        
        border {
            color: "white"
            width: 2
        }
        color: "transparent"
        opacity: mouseArea.containsMouse ? 1 : 0
        radius: Math.min(width, height) / 2
        
        property int size: mouseArea.containsMouse ? root.height + 8 : root.height

        Behavior on width {
            NumberAnimation {
                easing.type: Easing.OutQuad
            }
        }        

        Behavior on height {
            NumberAnimation {
                easing.type: Easing.OutQuad
            }
        }        

        Behavior on opacity {
            NumberAnimation {
                easing.type: Easing.OutQuad
            }
        }        
    }
    
    Rectangle {
        id: background
        
        anchors.fill: parent
        
        color: "#404040"
        opacity: mouseArea.containsPress ? 1 : 0.5
        radius: Math.min(width, height) / 2
    }

    Image {
        id: image

        anchors {
            fill: parent
            margins: background.radius / 3
        }
    }

    MouseArea {
        id: mouseArea

        anchors.fill: parent

        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true

        onClicked: parent.clicked()
    }
}

