---
layout: page
title: Situations
subtitle: Put the smart on your smartphone!
use-site-title: true
---

<div class="text-center" style="padding:25px">
  <img style="height:200px;width:200px;" src="{{ site.baseurl }}/img/situations-innershadow.png" />
</div>

<div class="text-center" style="padding:50px">
  <a href="https://play.google.com/store/apps/details?id=com.pastillilabs.situations2" target="_blank" style="display:inline-block;">
    <div style="height:60px;width:202px;background-image:url(&quot;img/en-play-badge.png&quot;);background-repeat:no-repeat;background-size:100% 100%"></div>
  </a>
</div>

<br/>
## What's new
---

<div class="posts-list">
  {% assign post = site.posts.first %}
  <article class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
	  <h2 class="post-title">{{ post.title }}</h2>

	  {% if post.subtitle %}
	  <h3 class="post-subtitle">
	    {{ post.subtitle }}
	  </h3>
	  {% endif %}
    </a>

    <p class="post-meta">
      Posted on {{ post.date | date: "%B %-d, %Y" }}
    </p>

    <div class="post-entry-container">
      {% if post.image %}
      <div class="post-image">
        <a href="{{ post.url | prepend: site.baseurl }}">
          <img src="{{ post.image }}">
        </a>
      </div>
      {% endif %}
      <div class="post-entry">
        {{ post.excerpt | strip_html | xml_escape | truncatewords: site.excerpt_length }}
        {% assign excerpt_word_count = post.excerpt | number_of_words %}
        {% if post.content != post.excerpt or excerpt_word_count > site.excerpt_length %}
          <a href="{{ post.url | prepend: site.baseurl }}" class="post-read-more">[Read&nbsp;More]</a>
        {% endif %}
      </div>
    </div>

    {% if post.tags.size > 0 %}
    <div class="blog-tags">
      Tags:
      {% if site.link-tags %}
      {% for tag in post.tags %}
      <a href="{{ site.baseurl }}/tags#{{- tag -}}">{{- tag -}}</a>
      {% endfor %}
      {% else %}
        {{ post.tags | join: ", " }}
      {% endif %}
    </div>
    {% endif %}

   </article>
</div>

