import QtQuick 2.0

Item {
    id: root

    property bool mobile: false
    property int index: 0
    property ListModel model: ListModel {}
    property string pagePath: ""

    onMobileChanged: {
        if(loader.item) {
            loader.item.mobile = mobile;
        }
    }

    Rectangle {
        height: loader.contentHeight + (root.mobile ? 80 : 100)
        anchors {
            left: parent.left
            right: parent.right
            verticalCenter: parent.verticalCenter
        }

        border {
            color: "black"
            width: 1
        }
        color: "#203040"
        opacity: 0.5

        Behavior on height {
            NumberAnimation {
                easing.type: Easing.OutQuad
            }
        }
    }

    Loader {
        id: loader

        anchors.fill: parent

        source: currentItem ? (root.pagePath + currentItem.target) : ""

        property real contentHeight: item ? item.contentHeight : 0
        property var currentItem: root.model.get(root.index)
    }
}

