---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# Home

Hello world!

{% for hw in site.homework %}

<span>{{hw.title}}</span> 

{% endfor %}