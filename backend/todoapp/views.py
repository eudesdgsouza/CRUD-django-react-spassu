from django.shortcuts import render
from rest_framework import viewsets # Importa o base ViewSet da DRF
from . import serializers # Importa os serializers do app
from . import models # Importa os models do app



class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all() # Define o conjunto de dados da view (todos os objetos Todo)
    serializer_class = serializers.TodoSerializers # Define o serializer a ser usado na API