from django.contrib import admin
from post_v2.apps.post.models import Post, Tag, PostTag

# Register your models here.
admin.site.register(Post)
admin.site.register(Tag)
admin.site.register(PostTag)
