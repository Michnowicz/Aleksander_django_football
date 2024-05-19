from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def get_data(request):
    players = PlayerSerializer(Player.objects.all(), many=True)
    teams = TeamSerializer(Team.objects.all(), many=True)
    roles = RoleSerializer(Role.objects.all(), many=True)
    countries = CountrySerializer(Country.objects.all(), many=True)

    data = {
        "players":players.data,
        "teams":teams.data,
        "roles":roles.data,
        "countries":countries.data,
    }

    return JsonResponse({"data":data})

@api_view(["POST"])
def create_player(request):
    player = PlayerSerializer(data=request.data)

    if player.is_valid():
        player.save()
        return Response({"message": "succes"})
    return Response({"message":"error", "errors":player.errors})