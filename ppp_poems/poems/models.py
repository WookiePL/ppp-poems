from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)

    def __str__(self):
        return "{0} {1}".format(self.name, self.surname)


class Rate(models.Model):
    rating = models.IntegerField(validators=[
        MinValueValidator(1),
        MaxValueValidator(5)
    ])
    creation_time = models.DateTimeField(auto_now_add=True)


class Poem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    content = models.TextField(blank=True)
    rates = models.ManyToManyField(Rate, blank=True)
    author = models.ForeignKey(Author, null=True)
    creation_time = models.DateTimeField(auto_now_add=True)
    modification_time = models.DateTimeField(auto_now=True)

    @property
    def rating(self):
        # not implemented yet
        return None

    def __str__(self):
        return "Poem: {}".format(self.title)
