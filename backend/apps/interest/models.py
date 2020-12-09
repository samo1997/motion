from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Interest(models.Model):
    name = models.CharField(max_length=25)
    # TODO refactor this to the user model for maintainability # interested users = many to many relationship
    users = models.ManyToManyField(
        to=User,
        related_name='things_user_likes',
    )
