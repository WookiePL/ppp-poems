from django.db import models

# Create your models here.

class Poem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    rating = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Poeam: {}".format(self.title)