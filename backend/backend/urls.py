from django.contrib import admin
from django.urls import path, include
import todoapp.urls # Importa o arquivo de rotas do app todoapp

urlpatterns = [
    path('admin/', admin.site.urls),  # Rota para o painel de administração
    path('api/', include(todoapp.urls)), # Inclui as rotas do app de tarefas com prefixo /api/
] 
