from rest_framework.routers import DefaultRouter
from .views import RoomViewSet

app_name = "rooms"
router = DefaultRouter()
router.register("", RoomViewSet)


urlpatterns = router.urls
