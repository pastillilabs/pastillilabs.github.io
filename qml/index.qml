import QtQuick 2.0
import "components"

Item {
    id: root

    property bool mobile: width < 500 || height < 500

    onMobileChanged: {
        dropdown.focus = false;
        footer.mobile = mobile;
        header.mobile = mobile;
        pageView.mobile = mobile;
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
            pageBase: Qt.resolvedUrl("pages/")
        }

        Header {
            id: header

            height: mobile ? 60 : 80
            anchors {
                left: parent.left
                right: parent.right
            }

            model: models.pages

            onSelectionChanged: dropdown.focus = false
            onMenuClicked: dropdown.focus = true
        }

        Footer {
            id: footer

            anchors {
                bottom: parent.bottom
                left: parent.left
                right: parent.right
            }

            contactLinks: models.contactLinks
            imgBase: Qt.resolvedUrl("../img/")
        }
    }

    Dropdown {
        id: dropdown

        anchors.fill: parent

        contactLinks: models.contactLinks
        focus: false
        imgBase: Qt.resolvedUrl("../img/")
        model: models.pages
        visible: focus

        onClicked: focus = false
        onContactLinkClicked: {
            focus = false;
            Qt.openUrlExternally(contactLinks.get(index).target);
        }
        onSelectionChanged: header.selection = selection
        onVisibleChanged: selection = header.selection
    }
}

