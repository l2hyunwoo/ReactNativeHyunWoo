# JSX

## JSX란?

```tsx
export default function App() {
  return (
    <View style={styles.component}>
      <Text>Open Up</Text>
      <StatusBar style="auto"/>
    </View>
  );
}
```

이러한 방식으로 HTML을 작성한 것과 같이 컴포넌트 객체 생성/함수 호출에 편의를 주는 코드들을 JSX라고 한다.</br>

### JSX는 하나의 부모를 가진다

```tsx
export default function App() {
  // 이러면 에러
  return (
    <Text>Open Up</Text>
    <StatusBar style="auto"/>
  );
}
```

JSX에서는 여러개의 컴포넌트가 return 되어서는 안된다. return을 할 때에는 <View>로 감싸거나 <Fragment>로 감싸면서 부모를 하나로 만들어줘야한다.

### null은 렌더링이 안되지만 undefined는 에러를 터뜨린다.

```tsx
export default function App() {
  return null;
}
```

이런 경우 정상적으로 동작은 하지만 화면에는 아무것도 그려지지 않는다.

```tsx
export default function App() {
  return undefined;
}
```

이런 경우에는 정상적으로 동작하지 않고 에러메시지를 송출한다.
