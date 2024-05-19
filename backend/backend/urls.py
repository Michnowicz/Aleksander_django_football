
from django.contrib import admin
from django.urls import path
from app.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/data', get_data),
    path('api/data/countries', get_countries),
    path('api/data/roles', get_roles),
    path('api/data/teams', get_teams),
    path('api/data/teams/<int:id>', get_team_detail),
    path('api/data/continents', get_continents),
    path('api/data/players/<int:id>', get_player_detail),
    path('api/data/player_create', create_player),
    path('api/data/team_create', create_team),
    path('api/data/player_update/<int:id>', update_player),
    path('api/data/team_update/<int:id>', update_team),
    path('api/data/player_delete/<int:id>', delete_player),
    path('api/data/team_delete/<int:id>', delete_team),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
