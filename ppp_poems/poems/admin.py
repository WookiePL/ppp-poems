from django.contrib import admin

# Register your models here.
from poems.models import Poem, Rate
admin.site.register(Poem)
admin.site.register(Rate)