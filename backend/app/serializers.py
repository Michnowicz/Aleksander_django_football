from rest_framework import serializers
from .models import *


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)
    class Meta:
        model = Team
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)
    class Meta:
        model = Role
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)
    class Meta:
        model = Country
        fields = '__all__'

class ContinentSerializer(serializers.ModelSerializer):
    teams = TeamSerializer(many=True, read_only=True)
    countries = CountrySerializer(many=True, read_only=True)
    class Meta:
        model = Continent
        fields = '__all__'