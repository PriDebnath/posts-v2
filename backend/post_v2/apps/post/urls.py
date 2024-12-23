from django.urls import path, include
from post_v2.apps.post.views import PostModelViewSet, TagModelViewSet
from rest_framework.routers import DefaultRouter

defaultRouter = DefaultRouter()
defaultRouter.register("post", PostModelViewSet)
defaultRouter.register("tag", TagModelViewSet)

urlpatterns = [path("", include(defaultRouter.urls))]
