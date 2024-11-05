# backend/routing.py

from django.urls import path
from backend.WebSocketModels.RoomsWS import RoomConsumer

websocket_urlpatterns = [
    path("ws/rooms/", RoomConsumer.as_asgi()),
]
