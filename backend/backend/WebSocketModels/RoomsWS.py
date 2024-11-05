# backend/WebSocketModels/RoomsWS.py

from channels.generic.websocket import AsyncWebsocketConsumer
import json

class RoomConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = 'general_info'

        # Dołącz do grupy ogólnej
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Opuść grupę ogólną
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    # Odbierz wiadomość od WebSocket (jeśli chcesz umożliwić klientom wysyłanie danych)
    async def receive(self, text_data):
        data = json.loads(text_data)
        # Przetwarzaj otrzymane dane, jeśli jest to potrzebne
        # Na przykład, możesz filtrować lub reagować na określone komunikaty

        # Przykład: Wysyłanie potwierdzenia otrzymania wiadomości
        response = {
            'status': 'Message received',
            'data': data
        }
        await self.send(text_data=json.dumps(response))

    # Metoda do wysyłania informacji do grupy
    async def send_info(self, event):
        info = event['info']

        # Wyślij informację do WebSocket
        await self.send(text_data=json.dumps({
            'info': info
        }))
