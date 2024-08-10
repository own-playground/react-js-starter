### input 태그 value 프로퍼티에 useState와 함께 사용하려면 onChange()가 필요

![alt text](./images/image1.png)

### 컴포넌트 분리

1. 별도 jsx 파일을 생성
2. 컴포넌트에 알맞게 작성
3. 컴포넌트를 export
  - `export default TodoHeader;`
4. App.jsx 혹은 상위 컴포넌트에서 조합
  - `<TodoHeader />`
  - `import TodoHeader from './components/TodoHeader';`