import QtQuick 2.0

Item {
    id: root

    property int index: 0
    property bool mobile: false
    property ListModel model: ListModel {}
    property string pageBase: ""

    onMobileChanged: {
        if(loader.item) {
            loader.item.mobile = mobile;
        }
    }

    Rectangle {
        height: loader.contentHeight + (root.mobile ? 60 : 100)
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
        opacity: 0.6

        Behavior on height {
            NumberAnimation {
                easing.type: Easing.OutQuad
            }
        }
    }

    Loader {
        id: loader

        anchors.fill: parent

        source: currentItem ? (root.pageBase + currentItem.target) : ""

        property real contentHeight: item ? item.contentHeight : 0
        property var currentItem: root.model.get(root.index)

        onLoaded: item.mobile = root.mobile
    }
}

