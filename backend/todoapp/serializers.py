from rest_framework import serializers # Importa os serializers da DRF
from . import models # Importa os models do app

class TodoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Todo  # Define o model a ser serializado
        fields = '__all__' # Inclui todos os campos do model na API