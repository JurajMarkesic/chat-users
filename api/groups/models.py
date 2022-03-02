from django.db import models
from users.models import User

class Group(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    users = models.ManyToManyField(User)

    class Meta:
        ordering = ['created']