from rest_framework import generics

from ppp_poems_core.poems.api.serializers import AuthorSerializer, PoemSerializer
from ppp_poems_core.poems.models import Author, Poem


class AuthorView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class PoemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer
