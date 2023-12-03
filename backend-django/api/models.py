from django.db import models

class Note(models.Model):
    id = models.CharField(primary_key=True, max_length=22)
    text = models.CharField(max_length=200)
    date = models.DateField()
    duedate = models.DateField()
    dead = models.BooleanField(default=False)
    def __str__(self):
        return self.text