from django.db import models

# Create your models here.

class Service(models.Model):
    name = models.CharField(max_length=60)
    price = models.IntegerField()

    def __str__(self):
        return f'{self.name}'


class Gallery(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Stylist(models.Model):
    name = models.CharField(max_length=50)
    profile_pic = models.CharField(max_length=500)
    about = models.TextField(null=True, max_length=600, blank=True)
    emergency = models.BooleanField(default=False)


    services = models.ManyToManyField(
        Service,
        related_name='stylists',
        blank=True
    )

    gallery = models.ManyToManyField(
        Gallery,
        related_name='stylists',
        blank=True
    )

    def __str__(self):
        return self.name
