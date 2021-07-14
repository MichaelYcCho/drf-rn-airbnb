from rest_framework import serializers

from users.serializers import TinyUserSerializer
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    user = TinyUserSerializer()
    
    class Meta:
        model = Room
        fields = ('id', 'name', 'price', 'instant_book', 'user')
        #fields = '__all__'

