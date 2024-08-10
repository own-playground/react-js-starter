import { useState } from 'react'

function App() {

  const [inputText, setInputText] = useState('') // inputText = '', setInputText = function

  const handleInput = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setInputText(value);
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
        <button>추가</button>
      </div>
    </div>
  )
}

export default App
