import { useState } from 'react'

function TodoInput({ todos }) {

    const [inputText, setInputText] = useState('')

    const handleInput = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        setInputText(value);
    }

    const handleClick = () => {
        console.log('추가 버튼 클릭');
        localStorage.setItem(inputText, inputText);

        setTodos((current) => {
            return [...current, inputText]; 
        }); 
        setInputText('');
    }
    
  return (
    <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>추가</button>
    </div>
  );
}

export default TodoInput;
