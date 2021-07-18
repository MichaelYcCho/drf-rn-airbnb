from django.urls import path
from .views import RoomsView, RoomView, room_search


app_name = "rooms"

urlpatterns = [
    path('list/', RoomsView.as_view()),
    path("search/", room_search),
    path("<int:pk>/", RoomView.as_view()),
]
