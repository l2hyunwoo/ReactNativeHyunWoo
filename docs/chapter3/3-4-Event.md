# Event

컴포넌트가 하는 역할에 따라 컴포넌트에서 활용할 수 있는 이벤트가 있다!

## Event: Change

값의 변화를 감지하는 change 이벤트

### onChange

TextInput 컴포넌트에 입력된 텍스트가 변경될 때 호출. 호출되는 함수에 다음과 같은 args가 전달

```json
{
  ...,
  "nativeEvent": {
    "eventCount": ...,
    "target": ...,
    "text": ...,
  }
}
```

이 중 TextInput의 변화되는 text를 가져오기 위해서 다음과 같이 이벤트를 설정한다.

```tsx
const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.nativeEvent.text)
```

그리고 아래와 같이 컴포넌트에 설정

```tsx
<TextInput
  ...
  onChange={_onChange}
  />
```

### 자매품이라기엔 더 유용한 onChangeText

그렇다고 위의 코드처럼 계속 ``event.nativeEvent``에 접근하는 것은 너무나도 귀찮기에 react-native에서는 ``onChnageText``라는 이벤트 트리거를 제공한다

```tsx
const _onChange = (text: string) => setText(text)

<TextInput
  ...
  onChangeText={_onChange}
  />
```

## Pressable

- 사용자의 터치에 상호작용하는 컴포넌트임 (이는 TouchableOpacity, TouchableWithoutFeedback과 동일)
- 가장 큰 차이점은 HitRect와 PressRect
  + 앱을 사용하는 유저의 손의 크기/두께를 고려하여 클릭을 더 용이할 수 있게 하기 위함
  + HitRect를 통해서 컴포넌트보다 약간 떨어진 부분까지 이벤트를 발생할 수 있도록 함
  + 꾹 누른 상태에서 버튼에서 얼마나 이동해야 완전히 떨어졌다고 판단할 수 있을까?
    - 이는 PressRect 기능을 활용할 수 있음

```tsx
<Pressable
  ...
  pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
  hitSlop={50}
  />
```

**PressRect의 범위는 HitRect의 끝에서부터 시작한다! 즉 PressRect의 범위는 hitSlop에 의존적**
