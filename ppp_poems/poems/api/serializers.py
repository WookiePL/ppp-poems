from rest_framework import serializers

from poems.models import Author, Poem


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'name', 'surname')


class PoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = ('id', 'title', 'description', 'content', 'rates', 'author', 'creation_time', 'modification_time')
