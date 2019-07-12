Stage({
    image : '{{ texture.fullName }}',
    textures : 
    {
        {% for sprite in allSprites %} '{{ sprite.trimmedName }}' : { x: {{ sprite.frameRect.x }}, y: {{ sprite.frameRect.y }}, width: {{ sprite.frameRect.width }}, height: {{ sprite.frameRect.height }} }{% if not forloop.last %}, {% endif %}
        {% endfor %}
    }
});