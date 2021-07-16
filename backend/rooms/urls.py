from django.urls import path
from .views import rooms_view, SeeRoomView


app_name = "rooms"

urlpatterns = [
    path('list/', rooms_view),
    path("<int:pk>/", SeeRoomView.as_view()),
]
