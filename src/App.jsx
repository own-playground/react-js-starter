import { useState } from 'react'

/**
 * 리액트 스테이트의 특징은 상태가 변경되면 화면이 다시 그려진다.(= 컴포넌트가 다시 그려진다)
 */
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

  /**
   * [변경할 상태, 상태를 변경하는 함수명] = useState(초기값)
   * [count, setCount] = useState(0)
   */
  const [inputText, setInputText] = useState('') // inputText = '', setInputText = function
  const [todos, setTodos] = useState(fetchTodos()); // 상태 변수
  // const todos = fetchTodos();          // -> 일반 변수

  // input event
  const handleInput = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setInputText(value);
  }

  // click event
  const handleClick = () => {
    console.log('추가 버튼 클릭');
    localStorage.setItem(inputText, inputText);

    // 상태와 데이터 불변을 유지하기 위한 배열 처리
    // https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation

    setTodos((current) => {
      // return todos.concat(inputText); // concat은 새로운 배열을 만들어서 반환
      return [...current, inputText]; // 스프레드 오퍼레이터(spread operator)
    }); // 자바 스크립트 레벨에서의 데이터 조작

    // setInputText(''); // input value 초기화
  }

  // remove event
  const handleRemove = (todo, index) => {
    console.log('remove 버튼 클릭', todo, index);
    // todos.splice(index, 1); // 바꾸고자 하는 값은 스테이트로 관리되지만, 바꾸려는 값은 일반 변수이고 그에 따라 일반 변수에 대한 데이터를 조작하더라도 화면이 다시 그려지지 않는다.
    // useState로 변경하고나서도 삭제되지 않는데 이건 상태로 관리되기 때문임

    // 또한, 불변식을 보장하기 때문에 변경이 아닌 대체를 해주어야 함
    // 방법 1: todos.slice
    // 방법 2: todos.filter
    const result = todos.filter((item) => item !== todo);

    setTodos(result);              // 자바 스크립트 레벨에서의 데이터 조작
    localStorage.removeItem(todo); // 스토리지 레벨에서의 데이터 조작
  }

  /**
   * 상태(State)
   * - 컴포넌트에서 관리하는 데이터
   * - UI에 표시하기 위해 React가 기억해야 되는 값
   * 
   * 인풋 값을 변경해야 하는 상황 같은 경우에 쓰임
   * useState = hook 이라고 표현?
   * 
   * [변경할 상태, 상태를 변경하는 함수] = useState(초기값)
   * [count, setCount] = useState(0)
   */

  // 리턴 값(html, css)이 화면 구성을 구성
  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>추가</button>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span> {/* 이벤트 핸들러 사용시 주의사항: https://react.dev/learn/responding-to-events#adding-event-handlers */}
                <button onClick={() => handleRemove(todo, index)}>remove</button> {/* 이벤트 핸들러에 값 전달을 할 때에는 화살표 함수가 포함되어야 한다. */}
                
              </li>
            )
          }
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
