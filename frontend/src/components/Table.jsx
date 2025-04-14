import axios from 'axios' // Importa biblioteca para requisições HTTP
import React, { useState } from 'react' // Importa React e hook useState para controle de estado
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md' // Importa ícones para ações visuais na tabela


// Componente que renderiza a tabela de tarefas, recebe tarefas, loading e função para atualizar a lista
const Table = ({ todos, isLoading, setTodos }) => {


// Estado para armazenar o conteúdo da tarefa em edição
  const [editText, setEditText] = useState({
    'body': ''
  })

// Exclui tarefa da API e atualiza a lista no estado
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todoapp/${id}/`)
      const newList = todos.filter(todo => todo.id !== id)
      setTodos(newList)
    } catch (error) {
      console.log(error);
    }
  }

// Edita tarefa na API e atualiza a lista com os dados retornados
  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(`http://127.0.0.1:8000/api/todoapp/${id}/`, value)
      console.log(response.data);
      const newTodos = todos.map(todo => todo.id === id ? response.data : todo)
      setTodos(newTodos)
    } catch (error) {
      console.log(error);
    }
  }

// Atualiza o estado do campo de edição conforme o usuário digita
  const handleChange = (e) => {
    console.log(e.target.value);
    setEditText(prev => ({
      ...prev,
      'body': e.target.value
    }))
    console.log(editText);
  }

// Chama a função de edição ao confirmar no modal e reseta o estado do campo
  const handleClick = () => {
    handleEdit(editText.id, editText)
    setEditText({
      'body': ""
    })
  }

// Alterna o status "completed" da tarefa (checkbox) e atualiza via API
  const handleCheckbox = (id, value) => {
    console.log(value.completed);
    handleEdit(id, {
      'completed': !value
    })
  }


  return (
    <div>
      <table className='w-11/12 max-w-4xl'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left text-black'>Seleção</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left text-black'>Tarefas</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left text-black'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left text-black'>Data da Criação</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left text-black'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <div>Aguardando... </div> :
            <> {todos.map((todoItem, index) =>
            (
              <tr key={todoItem.id} className='border-b border-black'>
                <td className='p-3'>
                  <span onClick={() => handleCheckbox(todoItem.id, todoItem.completed)} // Ícone que alterna visualmente o status da tarefa (concluída/incompleta)
                    className='inline-block cursor-pointer text-black'>{todoItem.completed === true ? <MdOutlineCheckBox /> :
                      <MdOutlineCheckBoxOutlineBlank />}
                  </span>
                </td>
                <td className='p-3 text-sm text-black' t title={todoItem.id}>{todoItem.body}</td>
                <td className='p-3 text-sm'>
                  <span className={`p-1.5 text-xs text-black font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-green-400' : 'bg-red-500'}`}>
                    {todoItem.completed ? 'Concluída' : 'Incompleta'}
                  </span>
                </td>
                <td className='p-3 text-sm font-medium text-black'>{new Date(todoItem.created).toLocaleString()}</td>
                <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5 '>
                  <span><label htmlFor="my-modal" ><MdEditNote onClick={() => setEditText(todoItem)} className=' text-xl cursor-pointer text-black' /></label></span> 
                  <span className=' text-xl cursor-pointer text-black'><MdOutlineDeleteOutline onClick={() => handleDelete(todoItem.id)} /></span>

                </td>
              </tr>
            )
            )}</>}
        </tbody>
      </table>

      {/* Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Editar Tarefa</h3>
          <input type="text" value={editText.body} onChange={handleChange} placeholder="Digite aqui" className="input input-bordered w-full mt-8" />
          <div className="modal-action">
            <label htmlFor="my-modal" onClick={handleClick} className="btn btn-primary">Editar</label>
            <label htmlFor="my-modal" className="btn">Fechar</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table