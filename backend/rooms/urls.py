from django.urls import path
from rooms.views import ListRoomsView, SeeRoomView


app_name = "rooms"

urlpatterns = [
    path('list/', ListRoomsView.as_view()),
    path("<int:pk>/", SeeRoomView.as_view()),
]
