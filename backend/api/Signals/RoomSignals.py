# api/signals.py

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from api.models import Rooms

@receiver([post_save, post_delete], sender=Rooms)
def notify_rooms_update(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "rooms_updates",
        {"type": "room_update"}
    )
