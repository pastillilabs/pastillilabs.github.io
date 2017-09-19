import QtQuick 2.0
import "components"

Item {
    property bool mobile: width < 500 || height < 500
    property ListModel pageModel: ListModel {}

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

    Header {
        id: header

        height: mobile ? 60 : 80
        anchors {
            left: parent.left
            right: parent.right
        }

        dropdownItem: dropdown
        homeIconSource: "../img/mono/situations.png"
        mobile: parent.mobile

        onMobileChanged: dropdown.focus = false
        onSelectionChanged: dropdown.focus = false
    }

    PageView {
        id: pageView

        anchors.fill: parent

        index: header.selection
        opacity: 1 - dropdown.opacity
    }

    Footer {
        id: footer

        height: mobile ? 0 : implicitHeight
        anchors {
            bottom: parent.bottom
            left: parent.left
            right: parent.right
        }
        
        visible: !mobile
    }

    Dropdown {
        id: dropdown

        anchors.fill: parent

        focus: false
        model: parent.pageModel
        opacity: focus ? 0.9 : 0
        visible: opacity > 0

        onClicked: focus = false
        onSelectionChanged: header.selection = selection
        onVisibleChanged: selection = header.selection

        Behavior on opacity {
            NumberAnimation {
            }
        }
    }
}

