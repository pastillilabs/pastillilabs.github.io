---
layout: page
title: FAQ
subtitle: Frequently Asked Questions
use-site-title: true
---

<a name="q1"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to set priority for a **situation**?

A **situation** does not have priority as such. Multiple **situations** can be active at any time.

However, the order of **situations** in the list does have meaning for individual **actions**. In case multiple active **situations** have overlapping **actions**, the **action** of the last active **situation** in the list takes precedence.

**NOTE:** Some **actions**, like opening an application, do not mind possible overlaps because they are not stateful.


<br/>
<br/>
<a name="q2"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to re-arrange items in the UI?

You can re-arrange **situations** by **long pressing** the items and **dragging** to a new location in the list.

Please note that neither **conditions** or **actions** can be re-arranged.


<br/>
<br/>
<a name="q3"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to make a condition use 'NOT'?

You can make a **condition** (or group of **conditions**) follow a 'NOT' logic by **tapping the icon** of that **condition**.


<br/>
<br/>
<a name="q4"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to apply 'OR' between conditions?

In pursuit of keeping the application UI and logic simple, it is not possible switch 'AND' to 'OR' between different types of **conditions** in a **situation**.

However, it is possible to achieve 'OR' by splitting a **situation'** to multiple smaller **situations**. These smaller **situations** can then be used as a **condition** for another **situation** by using the **Situation condition**.

Multiple entries in the **Situation condition** - like with all other **conditions** allowing multiple entries - then follow 'OR' logic.


<br/>
<br/>
<a name="q5"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to remove items in the UI?

You can remove **situations** and individual **conditions** and **actions** in them by **long pressing** the items and **dragging** to the trash bin that appears in the bottom center of the application view.

Please note that with **conditions** and **actions** the long press works only on top of the content part - not on top of the icon or equals sign.

A **situation** can also be removed from the top right menu.


<br/>
<br/>
<a name="q6"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to activate a situation by hand?

By tapping the play icon on the main list or in **situation** view. Press again to deactivate.


<br/>
<br/>
<a name="q7"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to put a situation on pause?

You can pause a **situation** by setting it in **manual mode**. Manual mode can be activated from the middle of a **situation** view, on the left side of the play button. Pausing can happen both while **situation** is active or inactive.

When a **situation** is paused, a hand sign should appear for it also in the main list.


<br/>
<br/>
<a name="q8"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) Why is the app not working in the background?

**Situations** is designed to run a continuous background service regardless of the UI being open or not. However, some Android & manufacturer versions have introduced battery optimization techniques that actively shut down or suspend services running in the background. Some even require user to allow background processes separately.

**Situations** does ask the user to disable battery optimization for the app. However, unfortunately that is not enough with all manufacturer specific implementations. Instead, you as a **user should also check system Settings and manually disable any manufacturer specific battery or background optimizations for the app**.

