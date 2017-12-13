from django.contrib import admin

# Register your models here.
from poems.models import Poem
admin.site.register(Poem)