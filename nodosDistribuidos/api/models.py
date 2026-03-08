from django.db import models

class Message(models.Model):

    text = models.TextField()

    file = models.FileField(
        upload_to='uploads/',
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text