from django.urls import path
from post_v2.apps.post.views import dummyview

urlpatterns = [path("post/", dummyview)]
