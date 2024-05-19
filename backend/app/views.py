from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status


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

def get_continents(request):
    continents = ContinentSerializer(Continent.objects.all(), many=True)
    return JsonResponse({"data":continents.data})

def get_countries(request):
    countries = CountrySerializer(Country.objects.all(), many=True)
    return JsonResponse({"data":countries.data})

def get_roles(request):
    roles = RoleSerializer(Role.objects.all(), many=True)
    return JsonResponse({"data":roles.data})

def get_teams(request):
    teams = TeamSerializer(Team.objects.all(), many=True)
    return JsonResponse({"data":teams.data})

def get_team_detail(request,id):
    team = TeamSerializer(Team.objects.get(id=id))
    return JsonResponse({"data": team.data})

def get_player_detail(request,id):
    player = PlayerSerializer(Player.objects.get(id=id))
    return JsonResponse({"data": player.data})



@api_view(["POST"])
def create_player(request):
    player = PlayerSerializer(data=request.data)

    if player.is_valid():
        player.save()
        return Response({"message": "succes"})
    return Response({"message":"error", "errors":player.errors})



@api_view(['DELETE'])
def delete_player(request, id):
    try:
        player = Player.objects.get(id=id)
    except Player.DoesNotExist:
        return Response({'message' : 'no entry found'})
    if request.method == 'DELETE':
        serializer = PlayerSerializer(player)
        player.delete()
        return Response(serializer.data)
    return JsonResponse({'message': 'Item item deleted successfully'})


@api_view(['GET', 'PUT'])
def update_player(request,id):
    try:
        player = Player.objects.get(id=id)
    except Player.DoesNotExist:
        return Response({'message' : 'no entry found'})
    if request.method == 'GET':
        serializer = PlayerSerializer(player)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PlayerSerializer(player, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(request.data)
    return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)



@api_view(["POST"])
def create_team(request):
    team = TeamSerializer(data=request.data)
    if team.is_valid():
        team.save()
        return Response({"message": "succes"})
    return Response({"message":"error", "errors":team.errors})

@api_view(['DELETE'])
def delete_team(request, id):
    try:
        team = Team.objects.get(id=id)
    except Team.DoesNotExist:
        return Response({'message' : 'no entry found'})
    if request.method == 'DELETE':
        serializer = TeamSerializer(team)
        team.delete()
        return Response(serializer.data)
    return JsonResponse({'message': 'Item deleted successfully'})

@api_view(['GET', 'PUT'])
def update_team(request,id):
    try:
        team = Team.objects.get(id=id)
    except Team.DoesNotExist:
        return Response({'message' : 'no entry found'})
    if request.method == 'GET':
        serializer = TeamSerializer(team)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TeamSerializer(team, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(request.data)
    return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)