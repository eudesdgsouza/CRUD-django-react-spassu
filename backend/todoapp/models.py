from django.db import models

class Todo(models.Model):
    body = models.CharField(max_length=300)  # Campo de texto para o conteúdo da tarefa
    completed = models.BooleanField(default=False) # Indica se a tarefa foi concluída
    update = models.DateTimeField(auto_now=True) # Armazena a data da última atualização
    created = models.DateTimeField(auto_now_add=True) # Armazena a data de criação da tarefa

    # Representação legível do objeto no admin e outros lugares
    def __str__(self):
        return self.body 
    