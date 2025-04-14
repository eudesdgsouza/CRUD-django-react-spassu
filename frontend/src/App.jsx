import { useState, useEffect } from 'react' // Importa hooks do React para estado e efeitos colaterais
import './App.css'; 
import './index.css'; 
import Table from './components/Table' // Importa os componentes da aplicação
import TodoForm from './components/TodoForm' // Importa os componentes da aplicação
import axios from 'axios' // Biblioteca para chamadas HTTP


function App() {

  const [todos, setTodos] = useState("")   // Armazena a lista de tarefas
  const [isLoading, setisLoading] = useState(true) // Controla o carregamento inicial da lista


  // Executa fetchData uma vez ao montar o componente (componenteDidMount)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/todoapp/');
      setTodos(response.data) // Atualiza o estado com as tarefas recebidas
      setisLoading(false) // Finaliza o estado de carregamento
    } catch (error) {
      console.log(error); // Exibe erro se houver falha
    }
  }



  return (
    <div className=' px-8 bg-indigo-200 min-h-screen '>
      <nav className='pt-8' >
        <h1 className=' text-5xl text-center text-black pb-8'>Lista de Tarefas </h1>
      </nav>
      {/* Body */}
      <TodoForm
        setTodos={setTodos}
        fetchData={fetchData}
      />
      <Table
        todos={todos}
        isLoading={isLoading}
        setTodos={setTodos} />

    </div>
  )
}

export default App
