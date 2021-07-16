from django.urls import path
from .views import RoomsView, RoomView


app_name = "rooms"

urlpatterns = [
    path('list/', RoomsView.as_view()),
    path("<int:pk>/", RoomView.as_view()),
]
