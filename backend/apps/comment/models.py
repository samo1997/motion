from django.db import models


class Comment(models.Model):
    text_content = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    # author = relationship many to one user
    # post = relationship many to one post
