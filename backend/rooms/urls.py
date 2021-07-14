from django.urls import path
from rooms.views import list_rooms


app_name = "rooms"

urlpatterns = [
    path('list/', list_rooms),
]
