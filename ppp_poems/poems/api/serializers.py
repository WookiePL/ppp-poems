from django.contrib.auth.models import User
from rest_framework import serializers
from oauth2_provider.models import Application
from rest_framework.validators import UniqueValidator

from poems.models import Author, Poem, Rate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    email = serializers.CharField(validators=[UniqueValidator(queryset=User.objects.all())])

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('email', 'username', 'password')


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
