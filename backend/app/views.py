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