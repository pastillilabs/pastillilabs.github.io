---
layout: page
title: Sonar
use-site-title: true
---

## What is Sonar

Sonar is a component that enables Situations app to perform tasks otherwise impossible for an app distributed via Jolla Store (aka Harbour).

It is an always running background process that Situations app can communicate with. Sonar installation package also implements autostart for Situations. That is, after installing Sonar, Situations background process gets automatically executed in device start-up - just like it was originally meant to.

Sonar is an open source component available on [GitHub](https://github.com/pastillilabs/sonar){:target="_blank"}.


## Installation

Sonar installation package is embedded in Situations application, which will prompt user to install it if required. Updates to Sonar follow the same mechanism.

Installation of Sonar requires the user to enable installation from untrusted sources via Sailfish Settings app. After installing Sonar, the setting can be disabled again.

Alternatively, Sonar can be built and installed from [sources](https://github.com/pastillilabs/sonar){:target="_blank"}. Pre-built standalone packages are available [here](https://github.com/pastillilabs/sonar/releases){:target="_blank"}.


## Uninstallation

Navigate to Situations About page and tap the "Uninstall Sonar" button.

Or from terminal: 'rpm -e situations-sonar'


## Important considerations

* Sonar runs as root, which means it basically has access to all device data & functionality.
* Sonar has a basic client process executable name check to prevent just about anyone to access the data & functionality it provides.
* In case of uninstalling Situations, Sonar must be uninstalled manually. It can be easily done via Situations app About page.
* Leaving Sonar installed without Situations app makes it accessible to anyone pretending to be Situations app.

