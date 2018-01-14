from django.contrib.auth.models import User
from rest_framework import serializers
from oauth2_provider.models import Application

from poems.models import Author, Poem, Rate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'name', 'surname')


class PoemSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    rating = serializers.SerializerMethodField()

    class Meta:
        model = Poem
        fields = ('id', 'title', 'description', 'content', 'author', 'creation_time', 'modification_time',
                  'user', 'rating')

    @staticmethod
    def get_rating(obj):
        return sum(c.rating for c in obj.rates.all()) / len(obj.rates.all())


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('name', 'client_id', 'client_secret')
