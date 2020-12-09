from rest_framework import serializers

from apps.post.models import Post
from apps.users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostDetailedSerializer(serializers.ModelSerializer):
    # TODO make sure to not disclose the password hash
    user = UserSerializer()
    shared = PostSerializer()

    class Meta:
        model = Post
        fields = '__all__'


class PostLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['logged_in_user_liked']
