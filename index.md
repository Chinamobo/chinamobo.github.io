---
layout: index
title: 首页
tagline: Welcome~
group: special
---

{% include JB/setup %}
{% include themes/rhenium/posts_list %}

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
