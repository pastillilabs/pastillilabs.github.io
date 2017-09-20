import QtQuick 2.0

Item {
    id: root

    property int index: 0
    property ListModel model: ListModel {}

    QtObject {
        id: priv

        property var currentItem: root.model.get(root.index)
        property string currentTarget: currentItem ? currentItem.target : ""
    }

    Loader {
        anchors.fill: parent

        source: priv.currentTarget
    }
}

