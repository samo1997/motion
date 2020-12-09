from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    user = models.ForeignKey(
        to=User,
        related_name='fk_post_to_user',
        on_delete=models.SET_NULL,
        null=True,
    )
    # TODO this has to be individual to the logged in user when requested, right? how to approach this
    logged_in_user_liked = models.BooleanField(default=False)
    # TODO has to be defined on creation, but how? is it a relationship table for every user?
    is_from_logged_in_user = models.BooleanField(default=False)
    liked_by = models.ManyToManyField(
        to=User,
        related_name='liked_posts',
        blank=True,
    )
    shared = models.ForeignKey(
        'self',
        related_name='shared_posts',
        on_delete=models.SET_NULL,
        null=True,
        blank=True)
    text_content = models.CharField(max_length=600)
    created = models.DateTimeField(auto_now_add=True)
    # relationship one to many images
    # relationship one to many comments
