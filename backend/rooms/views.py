import json

from django.core import serializers
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Room
from .serializers import RoomSerializer


@api_view(["GET"])
def list_rooms(request):
    room = Room.objects.all()
    serialized_rooms = RoomSerializer(room, many=True)
    return Response(serialized_rooms.data)
