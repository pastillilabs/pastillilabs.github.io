---
layout: page
title: Play Store SMS policy
subtitle: Google did bad :(
use-site-title: true
---

While we are forbidden to continue providing SMS related features in the application distributed through Play Store, we can still provide those features when the app is installed from our web pages.

If you want your SMS features back, please download & install the app from our [Github releases page](https://github.com/pastillilabs/packages/releases){:target="_blank"}.

For most devices the **situations_arm64.apk** package is the correct one. If you have an old device, you might need to use **situations_arm.apk** instead. And in very rare cases, you can use **situations_x86.apk**.

For each new update of the application from Google Play, you will need to come back to this page and re-install the SMS enabled version.



## ![]({{ site.baseurl }}/img/h1-info.png) Background

Towards the end of 2018 Google introduced new [policies for Play Store](https://android-developers.googleblog.com/2018/10/providing-safe-and-secure-experience.html). In short, instead of letting users choose whether a third party app can send or receive SMS messages or access call log, Play Store would categorically ban most apps declaring and trying to use the related permissions. The final deadline for removing the usage of the forbidden permissions from apps would be March 9th 2019.

In principle Google allows some [exceptions to the policy](https://support.google.com/googleplay/android-developer/answer/9047303?hl=en). For Situations app it should be a good thing that "Device Automation" is listed to be eligible for exception. However, in the past months it has become clear that the review process results in pretty much any and all possible excuses to be used as the means to reject our request for exception.

In our view Situations fulfills the description for "Device Automation" without question. But the most used reason for rejecting has been **"The declared functionality {DEVICE_AUTOMATION} is determined to be unnecessary or not aligned with the core functionality of your app."**. Of course there have been many other more or less fabricated reasons as well. While the reasons they give are very generic, they don't even bother to give any details when asked.

While we agree to the intent of improving security and privacy of Android, the way Google has chosen to act with this change is closer to pathetic misbehavior than anything else. Maybe it even fulfills characteristics of anti-competitive behavior and abuse of dominant power in market place.

Nevertheless we will continue trying get approved for exception. And silently hope that all this results in a class action lawsuit against Google. Because this issue does not affect only Situations but numerous other applications - and companies behind them - as well.


