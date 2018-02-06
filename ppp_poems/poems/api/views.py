from django.contrib.auth.models import User
from oauth2_provider.contrib.rest_framework import OAuth2Authentication, permissions
from rest_framework import generics
from oauth2_provider.models import Application

from poems.api.serializers import AuthorSerializer, PoemSerializer, ApplicationSerializer, UserProfileSerializer, \
    UserSerializer, RateSerializer
from poems.models import Author, Poem, Rate


class ApplicationView(generics.ListAPIView):
    authentication_classes = []
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        name = self.kwargs['name']
        return Application.objects.filter(name=name)


class AuthorsView(generics.ListAPIView):
    authentication_classes = []
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class PoemView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer


class PoemsView(generics.ListAPIView):
    authentication_classes = []
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer


class RateView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Rate.objects.all()
    serializer_class = RateSerializer


class RateCreateView(generics.CreateAPIView):
    authentication_classes = []
    queryset = Rate.objects.all()
    serializer_class = RateSerializer

# User profile view
class UserProfileView(generics.RetrieveAPIView):
    authentication_classes = [OAuth2Authentication]
    permissions_class = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'username'


class UserRegistration(generics.CreateAPIView):
    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

