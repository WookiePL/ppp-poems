from rest_framework import generics
from oauth2_provider.models import Application

from poems.api.serializers import AuthorSerializer, PoemSerializer, ApplicationSerializer
from poems.models import Author, Poem


class ApplicationView(generics.ListAPIView):
    authentication_classes = []
    serializer_class = ApplicationSerializer
    
    def get_queryset(self):
        name = self.kwargs['name']
        return Application.objects.filter(name=name)


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
    authentication_classes = []
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer

