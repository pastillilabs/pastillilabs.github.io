---
layout: page
title: FAQ
subtitle: Frequently Asked Questions
use-site-title: true
---

<a name="q1"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to set priority for a _'situation'_?

A _'Situation'_ does not have priority as such. Multiple _'situations'_ can be active at any time.

However, the order of _'situations'_ in the list does have meaning for individual _'actions'_. In case multiple active _'situations'_ have **overlapping _'actions'_**, the _'action'_ of the **last active _'situation'_ in the list takes precedence**.

**NOTE:** Some _'actions'_, like opening an application, do not mind possible overlaps because they are not stateful.

<br/>
<br/>
<a name="q2"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to make a _'condition'_ use 'NOT'?

You can make a _'condition'_ (or group of _'conditions'_) follow a 'NOT' logic by **tapping the equals sign**.


<br/>
<br/>
<a name="q3"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to apply 'OR' between _'conditions'_?

In pursuit of keeping the application UI and logic simple, it is not possible switch 'AND' to 'OR' between different types of _'conditions'_ in a _'situation'_.

However, it is possible to achieve 'OR' by **splitting** a _'situation'_ **to multiple smaller _'situations'_**. These smaller _'situations'_ can then be used as a _'condition'_ for another _'situation'_ by **using the _'Situation condition'_**.

Multiple entries in the _'Situation condition'_ - like with all other _'conditions'_ allowing multiple entries - then follow 'OR' logic.


<br/>
<br/>
<a name="q4"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to re-arrange items in the UI?

You can re-arrange _'situations'_ by **long pressing** the items and **dragging** to a new location in the list.

Please note that neither _'conditions'_ or _'actions'_ can be re-arranged.


<br/>
<br/>
<a name="q5"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to remove items in the UI?

You can remove _'situations'_ and individual _'conditions_' and _'actions'_ in them by **long pressing** the items and **dragging** to the trash bin that appears in the bottom center of the application view.

Please note that with _'conditions'_ and _'actions'_ the long press works only on top of the content part - not on top of the icon or equals sign.


<br/>
<br/>
<a name="q6"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to activate a situation by hand?

Swipe a situation item right on the main list. Swipe again to deactivate. After the swipe, one can also tap the yellow (or green) circle to set a timed activation (max 24h).


<br/>
<br/>
<a name="q6"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) How to put a situation on pause?

Swipe a situation item left on the main list. Swipe again to "unpause". After the swipe, one can also tap the red circle to set a timed pause (max 24h).


<br/>
<br/>
<a name="q7"></a>
## ![]({{ site.baseurl }}/assets/img/h1-question.png) Why is the app not working in the background?

Situations is designed to run a continuous background service regardless of the UI being open or not. However, latest Android & manufacturer versions have introduced battery optimization techniques that actively shut down or suspend services running in the background.

Situations does ask the user to disable battery optimization for the app. However, unfortunately that is not enough with all manufacturer specific implementations. Instead, you as a user should also check system Settings and manually disable any manufacturer specific battery or background optimizations for the app.

