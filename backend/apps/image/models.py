from django.db import models


class Image(models.Model):
    image = models.ImageField()
    # uploader = relationship many to one user
    # post = relationship many to one post
