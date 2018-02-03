from django.contrib import admin

# Register your models here.
from poems.models import Poem, Rate, Author

admin.site.register(Poem)
admin.site.register(Rate)
admin.site.register(Author)