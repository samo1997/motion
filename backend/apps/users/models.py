from any_imagefield.models import AnyImageField
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/username/<filename>
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    email = models.EmailField(
        'email address',
        unique=True
    )
    username = models.CharField(
        max_length=60,
        unique=True
    )
    password = models.CharField(
        max_length=120
    )
    first_name = models.CharField(
        max_length=60
    )
    last_name = models.CharField(
        max_length=60
    )
    phone = models.IntegerField(
        null=True
    )
    job = models.CharField(
        max_length=80
    )
    avatar = AnyImageField(
        "Image",
        upload_to='images'
    )
    # things_user_likes = models.ManyToManyField(to=Interest, related_name='users')
    banner = AnyImageField(
        "Image",
        upload_to='images'
    )
    # liked_posts = models.ForeignKey(to=Post, related_name='users')
    location = models.CharField(
        max_length=80
    )
    about_me = models.CharField(
        max_length=150
    )
    followees = models.ManyToManyField(
        'self',
        related_name='followers'
    )
    # followed_by = models.ManyToManyField('self', related_name='follower')
    logged_in_user_is_following = models.BooleanField(
        default=False
    )
    # sent_requests = models.ForeignKey(to=Friend, related_name='sender')
    # received_requests = models.ForeignKey(to=Friend, related_name='receiver')
    # comments = models.ForeignKey(to=Comment, related_name='users')
    # images = models.ForeignKey(to=Image, related_name='users')
    # reg_profile, posts

    # TODO change this to username once everything is set up
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username


class FriendRequest(models.Model):
    PENDING = "friend request sent"
    FRIENDS = "friends"
    status = models.CharField(
        verbose_name="status",
        max_length=100,
        choices=(
            (PENDING, PENDING),
            (FRIENDS, FRIENDS),
        ),
        default=PENDING
    )
    sender = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="sent_friend_request"
    )
    receiver = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="received_friend_request"
    )
    created = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"You sent friend request to {self.receiver}. Status: {self.status}"
