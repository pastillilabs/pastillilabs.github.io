import QtQuick 2.0
import "components"

Item {
    id: root

    property bool mobile: width < 500 || height < 500
    property ListModel pageModel: ListModel {}

    onMobileChanged: dropdown.focus = false

    Component.onCompleted: {
        var pageHome = Qt.resolvedUrl("pages/Home.qml");
        var pageSituations = Qt.resolvedUrl("pages/Situations.qml");
        var pageHelp = Qt.resolvedUrl("pages/Help.qml");
        var pageAbout = Qt.resolvedUrl("pages/About.qml");
                
        pageModel.append({ name: "Home", target: pageHome });
        pageModel.append({ name: "Situations", target: pageSituations });
        pageModel.append({ name: "Help", target: pageHelp });
        pageModel.append({ name: "About", target: pageAbout });

        header.model = pageModel;
        pageView.model = pageModel;
    }

    Background {
        anchors.fill: parent
    }

    Item {
        anchors.fill: parent

        opacity: dropdown.focus ? 0.01 : 1

        Behavior on opacity {
            NumberAnimation {
            }
        }

        Header {
            id: header

            height: hamburger ? 60 : 80
            anchors {
                left: parent.left
                right: parent.right
            }

            hamburger: mobile

            onSelectionChanged: dropdown.focus = false
            onMenuClicked: dropdown.focus = true
        }

        PageView {
            id: pageView

            anchors.fill: parent

            index: header.selection
        }

        Footer {
            anchors {
                bottom: parent.bottom
                left: parent.left
                right: parent.right
            }

            visible: !root.mobile
        }
    }

    Dropdown {
        id: dropdown

        anchors.fill: parent

        focus: false
        model: parent.pageModel
        visible: focus

        onClicked: focus = false
        onSelectionChanged: header.selection = selection
        onVisibleChanged: selection = header.selection
    }
}

