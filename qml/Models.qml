import QtQuick 2.0

QtObject {
    property ListModel pages: ListModel {
        ListElement {
            name: "Home"
            target: "Home.qml"
        }
        ListElement {
            name: "Situations"
            target: "Situations.qml"
        }
        ListElement {
            name: "Help"
            target: "Help.qml"
        }
        ListElement {
            name: "About"
            target:"About.qml"
        }
    }
}

