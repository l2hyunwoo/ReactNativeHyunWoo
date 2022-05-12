# Props and States

## Props

- 부모 컴포넌트로부터 전달된 속성 값 혹은 상속받은 속성 값
- 자식 컴포넌트에서 사용할 수 있는 prop은 **immutable**
- prop은 부모 컴포넌트에서 변경해야 한다

```tsx
interface Prop {
  title: string;
}

const PropButton: React.FC<Prop> = ({ title, children }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('Click!')}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
```

### 만약에 Tag 사이에 있는 값을 가져오고 싶을때에는?

=> ``React.ReactNode`` 타입으로 children을 가져오면 된디.

```tsx
interface Prop {
  title: string;
  children: React.ReactNode;
}

const PropButton: React.FC<Prop> = ({ title, children }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('Click!')}>
      <Text style={styles.text}>{children || title}</Text>
    </TouchableOpacity>
  )
}
```

## State

- prop은 컴포넌트 내에서 값을 변경할 수 없지만, state는 변경이 가능하다!
- 상태는 컴포넌트에서 변화할 수 있는 값
- 상태가 변하면 컴포넌트는 리렌더링된다

### 함수형 컴포넌트에서의 State 관리

- RN 0.59 버전 이전에서는 State 관리하는 컴포넌트는 무조건 클래스형 컴포넌트로 적어야 했음
- 그러나 React 16.8 이후 버전(RN 0.59)을 사용하면 React Hook을 사용하여 함수형 컴포넌트에서도 상태 관리 가능

#### useState

React Hooks 중 하나인 useState는 함수형 컴포넌트에서 상태를 관리할 수 있게 해줌

```typescript
const [state, setState] = useState(initialState);
```

- useState
  - state: 상태를 관리하는 변수
  - setState: 변수를 변경할 수 있는 setter

```tsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}}>{count}</Text>
      <Button title='+1' onPress={() => setCount(count + 1)} />
      <Button title='-1' onPress={() => setCount(count - 1)} />
    </View>
  );
}
```
