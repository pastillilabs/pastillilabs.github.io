import QtQuick 2.0

Item {
    id: root

    implicitWidth: 480
    implicitHeight: 640

    Rectangle {
        anchors.fill: parent

        color: "#6080a0"
    }

    Image {
        anchors.fill: parent

        fillMode: Image.PreserveAspectCrop
        opacity: 0.75
        source: "../img/background/1.jpg"
    }
}

