# React Native Style

## flex

- 테스트하는 다양한 기기에 대응을 해줘야할 때! flex를 활용하면 widtt, height에 따라 코기가 조정
- flex가 0일때는 설정된 width, height값에 따라 크기 조정

## Shadow

In iOS

- shadowColor: 그림자 색 설정
- shadowOffset: width, height 값 이용해서 그림자 거리 설정
- shadowOpacity: 그림자 불투명도
- shadowRadius: 그림자 흐림반경

In Android

- elevation

OS간 분리된 코드를 통합시키기 위한 Platform 라이브러리

```tsx
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10
      },
      android: {
        elevation: 10
      }
    })
  }
})
```
