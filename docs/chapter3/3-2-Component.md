# Component

## 컴포넌트

- 재사용이 가능한 조립 블록, 화면에 나타나는 UI 요소이다. 
    - `App.js`` 역시 컴포넌트로 볼 수 있음.
- UI 역할 + 속성(props) + 상태(state)에 따라 다른 표현 + 기능 수행
- 결론적으로 Data + UI Element

## React Custom Component

### Pressable/TouchableOpacity/TouchableWithoutFeedback

리액트의 내장 컴포넌트인 Button은 OS에 따라 모양이 달라지는 문제점이 있다. 이런 경우 RN 차원에서 커스텀 컴포넌트를 만드는 것이 낫다.

#### TouchableWithoutFeedback

- 자식 컴포넌트의 이벤트가 발생할 때 아무런 효과도 주지 않게 해주는 컴포넌트
- Button과 달리 OS의 구분 없이 동일한 모양으로 보임

#### TouchableOpacity

- TouchableWithoutFeedback 컴포넌트를 상속받은 컴포넌트
- Button을 눌렀을 때 Hover 기능을 줄 수 있음
- TouchableWithoutFeedback과 마찬가지로 OS의 구분 없이 동일한 모양으로 보임

#### Pressable

TouchableOpacity와 같은 버튼 역할을 할 수 있지만, 더 다양한 Press를 인식할 수 있음

- onPressIn: press가 활성화 되었을 때
- onPressOut: press 제스처가 비활성화 되었을 때
- onLongPress: 유저가 500ms 이상 누르고 있다가 떼면 onLongPress가 바로 작동

```tsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```
