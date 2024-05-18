from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *

# Create your views here.
def get_players(request):
    players = PlayerSerializer(Player.objects.all(), many=True)
    return JsonResponse({"data": players.data})

def get_teams(request):
    teams = TeamSerializer(Team.objects.all(), many=True)
    return JsonResponse({"data": teams.data})

def get_roles(request):
    roles = RoleSerializer(Role.objects.all(), many=True)
    return JsonResponse({"data":roles.data})

def get_data(request):
    players = PlayerSerializer(Player.objects.all(), many=True)
    teams = TeamSerializer(Team.objects.all(), many=True)
    roles = RoleSerializer(Role.objects.all(), many=True)

    data = {
        "players":players.data,
        "teams":teams.data,
        "roles":roles.data,
    }

    return JsonResponse({"data":data})