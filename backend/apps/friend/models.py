from django.db import models


class Friend(models.Model):
    objects = None  # new
    STATUS_CHOICES = [
        (1, 'friend_request_pending'),
        (2, 'friend_request_accepted'),
        (3, 'friend_request_rejected')
    ]

    status = models.IntegerField(
        choices=STATUS_CHOICES,
        null=True,
        blank=True,
    )
    # receiver = relationship many to one user
    # sender = relationship many to one user
