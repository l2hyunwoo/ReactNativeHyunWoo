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

#### 논쟁거리

**주의** React.FC를 이용할 때 defaultProps가 제대로 동작이 되고 있지 않다

- 함수형 Component를 만들 때 ``() => {}`` 형식도 사용가능하고 ``function`` 키워드도 사용가능, 어차피 함수니까
- 다만 React.FC 타입은 사용을 자제하는것이 좋다고 한다.
  - React.FC의 장단점
    - props에 기본적으로 children이 있음
      - 특정 컴포넌트에서 children이 필요하지 않을 수도 있는데 넣어놨다? 그것도 옵셔널로?
      - 그냥 children이 필요하다면 prop에 명시하는 것이 좋음

```tsx
interface GreetingProps {
  name: string;
  children: React.ReactNode;
}
```

    - 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다는 것
      - React.FC를 이용할 때 defaultProps가 제대로 동작이 되고 있지 않다

```tsx
interface GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;

// App.ts

const App: React.FC = () => {
  return <Greetings name="Hello" />; // 이 부분에서 에러
  // mark에 값이 없다면서 에러남
};

export default App;

// Solution
interface GreetingsProps = {
  name: string;
  mark: string;
};

// 비구조화 할당에서 기본값을 부여해야 됨
const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
  <div>
    Hello, {name} {mark}
  </div>
);
```




