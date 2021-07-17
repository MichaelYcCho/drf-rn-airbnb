from django.urls import path
from .views import MeView, user_detail, FavsView

app_name = "users"

urlpatterns = [
    path("me/", MeView.as_view()),
    path("me/fav/", FavsView.as_view()),
    path("<int:pk>/", user_detail),
]
