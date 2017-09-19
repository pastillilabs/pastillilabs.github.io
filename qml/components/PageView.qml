import QtQuick 2.0

Item {
    id: root

    property int index: 0
    property ListModel model

    Loader {
        anchors.fill: parent

        property var currentItem: model ? model.get(root.index) : null

        source: currentItem ? currentItem.target : ""
    }
}

