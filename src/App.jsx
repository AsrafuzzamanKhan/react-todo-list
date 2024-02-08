import { useEffect, useState } from 'react'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <div>
      <Header />
      <div className='flex flex-col px-[1vw] justify-center w-full min-h-screen bg-cover bg-no-repeat bg-[url("./assets/bg.png")]'>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
        <TodoList todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </div>

    </div>
  )
}

export default App