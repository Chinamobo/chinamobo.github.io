---
layout: index
title: 首页
tagline: Welcome~
group: special
---

{% include JB/setup %}

<ul>
{% for post in site.posts  %}
<li>
	<a href="{{ BASE_PATH }}{{ post.url }}"><span class="title">{{ post.title }}</span></a>
	<span>{{ post.date | date: "%m %d %Y" }}</span>
	<p>{{ post.excerpt }}</p>
</li>
{% endfor %}
</ul>

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
