from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.id } - {self.title}"


class Tag(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id } - {self.title}"
