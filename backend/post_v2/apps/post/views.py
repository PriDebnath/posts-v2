from django.shortcuts import render
from django.http import JsonResponse
from post_v2.apps.post.models import Post, Tag
from post_v2.apps.post.serializers import PostSerializer, TagSerializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.


# def postview(request):
#     post = Post.objects.all()
#     list_post = list(post.values())
#     return JsonResponse(list_post, safe=False, status=200)


class PostModelViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class TagModelViewSet(ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
