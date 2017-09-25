import QtQuick 2.0
import "components"

Item {
    id: root

    property bool mobile: width < 500 || height < 500

    onMobileChanged: {
        pageView.mobile = mobile;
        dropdown.focus = false;
    }

    Models {
        id: models
    }

    Background {
        anchors.fill: parent

        onHomeClicked: header.selection = 0
    }

    Item {
        anchors.fill: parent

        opacity: dropdown.focus ? 0.01 : 1

        Behavior on opacity {
            NumberAnimation {
            }
        }

        PageView {
            id: pageView

            anchors.fill: parent

            index: header.selection
            model: models.pages
            pagePath: Qt.resolvedUrl("pages/")
        }

        Header {
            id: header

            height: hamburger ? 60 : 80
            anchors {
                left: parent.left
                right: parent.right
            }

            hamburger: mobile
            model: models.pages

            onSelectionChanged: dropdown.focus = false
            onMenuClicked: dropdown.focus = true
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

        Component.onCompleted: model = models.pages
    }
}

