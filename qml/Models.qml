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

    property ListModel contactLinks: ListModel {
        ListElement {
            icon: "mono/twitter.png"
            target: "https://www.twitter.com/situationsapp"
        }
        ListElement {
            icon: "mono/facebook.png"
            target: "https://www.facebook.com/situationsapp"
        }
        ListElement {
            icon: "mono/mail.png"
            target: "mailto:support@pastillilabs.com"
        }
    }
}

