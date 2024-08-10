import { useState } from 'react'

import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function fetchTodos() {
  const result = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    result.push(value);
  }
  return result;
}

function App() {

  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo, index) => {
    console.log('remove 버튼 클릭', todo, index);
    const result = todos.filter((item) => item !== todo);

    setTodos(result);
    localStorage.removeItem(todo);
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} onTodoRemove={handleRemove} />
    </div>
  )
}

export default App
