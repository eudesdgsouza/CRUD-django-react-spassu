from django.contrib import admin
from . import models # Importa os models do app

# Registra o model Todoapp no painel admin
admin.site.register(models.Todo) 