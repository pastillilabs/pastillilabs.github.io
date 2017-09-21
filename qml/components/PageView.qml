import QtQuick 2.0

Item {
    id: root

    property string pagePath: ""
    property int index: 0
    property ListModel model: ListModel {}

    Loader {
        anchors.fill: parent

        source: currentItem ? (root.pagePath + currentItem.target) : ""

        property var currentItem: root.model.get(root.index)
    }
}

