from rest_framework import generics

from ppp_poems_core.poems.api.serializers import AuthorSerializer
from ppp_poems_core.poems.models import Author


class AuthorView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer