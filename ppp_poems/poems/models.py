from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} {self.surname}"


class Poem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    content = models.TextField(blank=True)
    author = models.ForeignKey(Author, null=True)
    user = models.ForeignKey(User, null=False)
    creation_time = models.DateTimeField(auto_now_add=True)
    modification_time = models.DateTimeField(auto_now=True)

    @property
    def rating(self):
        return None

    def __str__(self):
        return f"Poem: {self.title}"


class Rate(models.Model):
    user = models.ForeignKey(User, null=False)
    poem = models.ForeignKey(Poem, null=False)
    rating = models.IntegerField(validators=[
        MinValueValidator(1),
        MaxValueValidator(5)
    ])
    creation_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.rating}"


class Comment(models.Model):
    content = models.TextField(blank=False)
    user = models.TextField(blank=False)
    date = models.DateField(blank=True)
    poem = models.ForeignKey(Poem, on_delete=models.CASCADE)
