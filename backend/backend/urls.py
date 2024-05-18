
from django.contrib import admin
from django.urls import path
from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/players', get_players),
    path('api/teams', get_teams),
    path('api/roles', get_roles),
    path('api/data', get_data),
]
