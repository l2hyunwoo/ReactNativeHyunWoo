# Styling

리액트 네이티브에서는 두 가지 방법으로 스타일을 적용할 수 있다

- inline style
- StyleSheet

## Inline Styling

- 컴포넌트에 직접 스타일을 입력하는 방식
- HTML에서는 문자열 형태로 스타일을 입력하지만, RN에서는 객체로 넣어줘야됨

```tsx
<View
  style={{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  />
```

하지만

- 컴포넌트에 동일 코드가 반복
- 해당 스타일이 이 스타일이 적용되었는지 이해가 어려움

위와 같은 단점이 존재함

## Class Styling

- 컴포넌트 태그에 직접 입력하는 방식 X, StyleSheet에 정의된 스타일 사용

```tsx
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Class Styling</Text>
    </View>
  )
}

type Style = {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 600,
    color: 'black',
  }
})
```

- 더 명확히 이해가 가게 코드가 작성된다는 장점이 있음
- 또한 특정 부분의 변경이 필요한 경우 그 부분의 코드만 변경하면 모든 컴포넌트에 적용!
- 장기적으로 생각하면 클래스 스타일로 스타일링을 하는 것이 더 편할 수 있음
