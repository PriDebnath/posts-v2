from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="posts", null=True
    )

    def __str__(self):
        return f"{self.id } - {self.title}"


class Tag(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id } - {self.title}"


class PostTag(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
    )
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
    )

    class Meta:
        unique_together = ("post", "tag")

    def __str__(self):
        return f"{self.id } - Post: {self.post}  - Tag: {self.tag}"
