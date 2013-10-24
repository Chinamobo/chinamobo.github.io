---
layout: post
title: Variables Debug
description: 
category: test
---

{% include rhenium/setup %}

site:
{{ site | debug }}

---

page:
{{ page | debug }}

---

content:
{{ content | debug }}

---

paginator:
{{ paginator | debug }}

---

post:
{{ title | debug }}

DEBUG_END
