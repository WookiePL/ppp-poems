from rest_framework import generics

from poems.api.serializers import AuthorSerializer, PoemSerializer
from poems.models import Author, Poem


class AuthorsView(generics.ListAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class PoemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer


class PoemsView(generics.ListAPIView):
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer

