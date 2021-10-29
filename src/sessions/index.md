---
title: Sessions
layout: base
---

# Sessions

<ul>
{%- for session in sessions -%}
  <li><a href="/sessions/{{ session.slug }}/">{{ session.title }}</a> by {{ session.speaker.name }}</li>
{%- endfor -%}
</ul>

[&larr;](/)
