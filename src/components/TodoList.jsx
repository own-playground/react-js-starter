import { useState } from 'react'

function fetchTodos() {
  const result = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    result.push(value);
  }
  return result;
}

function TodoList() {

  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo, index) => {
    console.log('remove 버튼 클릭', todo, index);
    const result = todos.filter((item) => item !== todo);

    setTodos(result);
    localStorage.removeItem(todo);
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span> 
              <button onClick={() => handleRemove(todo, index)}>remove</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList