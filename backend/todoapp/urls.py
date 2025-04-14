from django.urls import path, include
from rest_framework import routers # Importa o roteador da DRF
from . import views # Importa as views do app

# Registra o ViewSet de tarefas na API com prefixo /todoapp/
router = routers.DefaultRouter() 
router.register('todoapp', views.TodoViewSet, basename='todoapp')

# Inclui todas as rotas geradas automaticamente pelo router
urlpatterns = [
    path('', include(router.urls)),
]