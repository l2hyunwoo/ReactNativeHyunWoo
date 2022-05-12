# useState

useState 함수 호출 시 변수와 변수 수정할 수 있는 세터 함수를 배열로 return

```typescript
const [state, setState] = useState(initialState);
```

- useState 함수는 관리해야하는 상태의 수만큼 여러 번 사용 가능!
- 상태 변경 시 변경된 내용을 반영하여 컴포넌트가 Re-render

## setter 함수

- setter 함수에 변경될 상태의 값을 전달
- setter 함수의 패러미터에 함수를 전달
  - setter가 비동기로 동작하기에 상태 변경이 여러번 일어날 경우 상태 업데이트가 중복해서 일어날 수 있음

```tsx
setState(prevState => {})
```

이 경우 setter에 전달되는 이전 상태값을 활용하면 문제 해결 가능

```tsx
<Button 
  title='+' 
  onPress={() => {
    setCount(prevState => {prevState + 1})
    setCount(prevState => {prevState + 1})
  }} 
  />
```
