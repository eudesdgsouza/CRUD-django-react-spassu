import React, { useEffect, useState } from 'react' // Importa React, useEffect (não usado) e useState para controle de estado
import axios from 'axios' // Importa biblioteca para fazer requisições HTTP


// Componente para adicionar nova tarefa, recebe função para atualizar tarefas e função para buscar dados
const TodoForm = ({ setTodos, fetchData }) => {

    // Estado local para armazenar o texto digitado pelo usuário
    const [newTodo, setNewTodo] = useState({
        'body': ''
    })

    // Atualiza o estado com o texto digitado no input
    const handleChange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body': e.target.value
        }))
    }

    // Envia a nova tarefa para a API, reseta o campo e atualiza a lista de tarefas
    const postTodo = async () => {
        try {
            await axios.post(`http://127.0.0.1:8000/api/todoapp/`, newTodo)
            setNewTodo({ 'body': '' })
            setTodos(prevTodos => [...prevTodos, newTodo])
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <input type="text" placeholder="Digite sua Tarefa" value={newTodo.body} // Campo de texto onde o usuário digita a nova tarefa
                className="input input-bordered input-info w-full max-w-xs"
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTodo();
                    } // Dispara envio ao pressionar Enter
                }} />
            <button onClick={postTodo} className="btn btn-primary ml-2">+ Tarefa</button>
        </> // Botão que envia a nova tarefa quando clicado
    )
}

export default TodoForm