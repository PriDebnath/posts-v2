from django.urls import path, include
from post_v2.apps.post.views import PostModelViewSet
from rest_framework.routers import DefaultRouter

defaultRouter = DefaultRouter()
defaultRouter.register("post", PostModelViewSet)

urlpatterns = [
    # path("post/", PostModelViewSet.as_view({"get": "list"}))
    path("", include(defaultRouter.urls))
]
