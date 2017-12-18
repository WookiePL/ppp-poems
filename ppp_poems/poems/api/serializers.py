from rest_framework import serializers, permissions
from oauth2_provider.models import Application

from poems.models import Author, Poem


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'name', 'surname')


class PoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = ('id', 'title', 'description', 'content', 'rates', 'author', 'creation_time', 'modification_time')


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('name', 'client_id', 'client_secret')
