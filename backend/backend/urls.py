
from django.contrib import admin
from django.urls import path
from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/data', get_data),
    path('api/data/player_create', create_player),
]
