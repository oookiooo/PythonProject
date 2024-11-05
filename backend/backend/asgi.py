import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import backend.routing  # Import routing po inicjalizacji aplikacji Django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Inicjalizacja aplikacji Django
django_asgi_app = get_asgi_application()

# Definicja aplikacji ASGI z obsługą HTTP i WebSocket
application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AuthMiddlewareStack(
        URLRouter(
            backend.routing.websocket_urlpatterns
        )
    ),
})
