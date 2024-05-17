from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Continent(models.Model):
    name = models.CharField(max_length=64)

class Country(models.Model):
    name = models.CharField(max_length=125)
    continent = models.ForeignKey(Continent, related_name="continents", on_delete=models.SET_NULL)

class Team(models.Model):
    name = models.CharField(max_length=125)
    city = models.CharField(max_length=64)
    continent = models.ForeignKey(Country, related_name="countries", on_delete=models.SET_NULL)

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
    country = models.ForeignKey(Country, related_name="countries", on_delete=models.SET_NULL)
    team = models.ForeignKey(Team, related_name="teams", on_delete=models.SET_NULL)
    role = models.ForeignKey(Role, related_name="roles", on_delete=models.SET_NULL)

    def delete(self, *args, **kwargs):
        self.media_file.delete()
        super(Player, self).delete(*args, **kwargs)