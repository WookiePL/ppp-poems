from django.contrib.auth.models import User
from rest_framework import serializers
from oauth2_provider.models import Application
from rest_framework.validators import UniqueValidator

from poems.models import Author, Poem, Rate, Comment


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

class CommentSerializer(serializers.ModelSerializer):

    poem_id = serializers.IntegerField(source='poem.id', write_only=True, allow_null=False)

    def create(self, validated_data):
        return Comment.objects.create(content=validated_data.pop('content'), poem_id=validated_data.pop('poem')['id'],
                                  user=validated_data.pop('user'), date=validated_data.pop('date'))

    class Meta:
        model = Comment
        fields = ('id', 'content', 'user', 'date', 'poem_id')


class RateSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    userName = serializers.CharField(source='user.username', write_only=True, allow_null=False)
    poem = serializers.IntegerField(source='poem.id', write_only=True, allow_null=False)

    def update(self, instance, validated_data):
        instance.rating = validated_data['rating']
        instance.save()
        return instance

    def create(self, validated_data):
        rat = Rate.objects.create(rating=validated_data.pop('rating'), poem_id=validated_data.pop('poem')['id'],
                                  user_id=User.objects.get(username__exact=validated_data.pop('user')['username']).id)
        return rat

    class Meta:
        model = Rate
        fields = ('user', 'rating', 'poem', 'userName', 'id')


class PoemSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    author = AuthorSerializer(many=False, read_only=False)
    rate_set = RateSerializer(many=True, read_only=True)
    rating = serializers.SerializerMethodField()
    rating_count = serializers.SerializerMethodField()

    class Meta:
        model = Poem
        fields = ('id', 'title', 'description', 'content', 'author', 'creation_time', 'modification_time',
                  'user', 'rating', 'rating_count', 'rate_set')

    @staticmethod
    def get_rating_count(obj):
        return len(Rate.objects.filter(poem_id__exact=obj.id))

    @staticmethod
    def get_rating(obj):
        size = len(Rate.objects.filter(poem_id__exact=obj.id))
        if size:
            return sum(c.rating for c in Rate.objects.filter(poem_id__exact=obj.id)) / size
        else:
            return 0


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('name', 'client_id', 'client_secret')
