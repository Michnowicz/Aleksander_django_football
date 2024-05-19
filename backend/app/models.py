from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Continent(models.Model):
    name = models.CharField(max_length=64, null=True)

class Country(models.Model):
    name = models.CharField(max_length=125, null=True)
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null=True)

class Team(models.Model):
    name = models.CharField(max_length=125)
    city = models.CharField(max_length=64)
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null=True)

class Role(models.Model):
    name = models.CharField(max_length=64)

class Player(models.Model):
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    age = models.IntegerField(validators=[MinValueValidator(18), MaxValueValidator(100)])
    phone = models.CharField(max_length=20)
    mail = models.EmailField()
    gender = models.CharField(max_length=1)
    image = models.ImageField(upload_to="images/")
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    team = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Player, self).delete(*args, **kwargs)