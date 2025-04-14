# ✅ Lista de Tarefas - Django + React

Este é um projeto Fullstack de Lista de Tarefas (ToDo List) desenvolvido com **Django** no backend e **React** no frontend. O sistema permite **criar, visualizar, editar, deletar e marcar tarefas como concluídas**, com uma interface moderna estilizada com **TailwindCSS** e **DaisyUI**.

---

## 📌 Funcionalidades

- Adicionar nova tarefa
- Editar tarefa existente
- Marcar tarefa como concluída ou pendente
- Excluir tarefa
- Interface visual diferenciando tarefas concluídas e pendentes
- Integração completa entre frontend e backend

---

## ⚙️ Tecnologias Utilizadas

### 🔧 Backend (Django)
- Python 3.x
- Django
- Django REST Framework
- django-cors-headers

### 🎨 Frontend (React)
- Vite + React
- TailwindCSS
- DaisyUI
- Axios
- React Icons

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

git clone https://github.com/eudesdgsouza/todoApp-django-react-spassu.git

cd todoApp-django-react-spassu

---

### 2. Rodar o Backend (Django)

cd backend

python -m venv venv

source venv/bin/activate  
# 
ou venv\Scripts\activate no Windows

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

A API ficará disponível em: http://127.0.0.1:8000/api/todoapp/

---

### 3. Rodar o Frontend (React)

cd frontend

npm install

npm run dev


O frontend abrirá em: http://127.0.0.1:5173

---

## 🧪 Testes

Você pode testar o funcionamento:

- Criando uma nova tarefa no formulário.
- Clicando para editar ou excluir.
- Marcando como concluída (checkbox).
- Conferindo as tarefas no admin do Django e também na consulta em http://127.0.0.1:8000/api/todoapp/.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Sinta-se livre para usar, modificar e compartilhar!

---
