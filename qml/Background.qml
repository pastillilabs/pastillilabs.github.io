import QtQuick 2.0
import "components"

Rectangle {
    id: root
    
    color: "#6080a0"
    
    property int index: -1
    property int count: 5

    signal homeClicked()
    
    Component.onCompleted: {
        index = Math.random() * count;
    }
    
    onIndexChanged: {
        var imageSource = "../img/background/" + index + ".jpg";
        if(image1.opacity) {
            image2.source = imageSource;
        }
        else {
            image1.source = imageSource;
        }
    }
    
    Timer {
        interval: 60000
        repeat: true
        running: true
        
        onTriggered: root.index = (root.index + 1) % root.count;
    }

    Image {
        id: image1

        anchors.fill: parent

        fillMode: Image.PreserveAspectCrop
        opacity: 0

        onStatusChanged: {
            if(status == Image.Ready) {
                opacity = 1;
            }
        }
        
        Behavior on opacity {
            NumberAnimation {
                duration: 2000
            }
        }
    }

    Image {
        id: image2
        
        anchors.fill: parent

        fillMode: Image.PreserveAspectCrop
        opacity: 1 - image1.opacity

        onStatusChanged: {
            if(status == Image.Ready) {
                image1.opacity = 0;
            }
        }
    }

    ImageButton {
        width: 260
        height: 260
        anchors {
            top: parent.top
            left: parent.left
            margins: -80
        }

        source: "../img/mono/situations.png"

        onClicked: root.homeClicked()
    }
}

