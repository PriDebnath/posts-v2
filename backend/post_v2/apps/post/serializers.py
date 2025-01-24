from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    ListField,
    ValidationError,
)
from rest_framework import status
from post_v2.apps.post.models import Post, Tag, PostTag


class PostSerializer(ModelSerializer):
    """
    @1 user should set when creating a post
    @2 post serialzer should take list of tags and attach to a single post
    @3 display all attached tags - done
    """

    tags = SerializerMethodField(method_name="get_tags")
    tag_list = ListField(write_only=True, required=False)

    class Meta:
        model = Post
        fields = "__all__"

    def create(self, validated_data):
        user = self.context["request"].user
        if user.is_authenticated:
            validated_data["user"] = user

        tag_list = validated_data.pop(
            "tag_list", []
        )  # pop out tag_list before saving it
        post_instance = super().create(validated_data)
        if tag_list:
            for tag_title in tag_list:
                tag_instance, created = Tag.objects.get_or_create(title=tag_title)
                PostTag.objects.create(post=post_instance, tag=tag_instance)

        return post_instance

    def update(self, instance, validated_data):
        PostTag.objects.filter(post=instance).delete()
        tag_list = validated_data.pop("tag_list", [])
        instance = super().update(instance, validated_data)
        if tag_list:
            for tag_title in tag_list:
                tag_instance, created = Tag.objects.get_or_create(title=tag_title)
                PostTag.objects.create(post=instance, tag=tag_instance)

        return instance

    def delete(self, instance):
        user = self.context["request"].user

        if user == instance.user:
            instance.delete()
        else:
            raise ValidationError(
                "You are not allowed to modify the post", status.HTTP_400_BAD_REQUEST
            )

    def get_tags(self, obj):
        tags = Tag.objects.filter(posttag__post=obj)
        return TagSerializer(tags, many=True).data


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
