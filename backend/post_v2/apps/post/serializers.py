from rest_framework.serializers import ModelSerializer
from post_v2.apps.post.models import Post


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
