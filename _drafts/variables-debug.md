---
layout: post
title: Variables Debug
description: 环境变量测试页面
category: test
author: 无名氏

---

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
