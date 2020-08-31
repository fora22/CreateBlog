# Backend_Practice
Server Backend Practice



# Django vs Node.js

### 간단히 보는 둘의 차이점

- 무엇을 빌드하느냐에 따라 다르다.

- 우선 CRUD(Create Read Update Delete)를 알아야 한다.

- 예를 들면, 인스타그램은 CRUD이다. 

- 장고는 CRUD를 위한 최선의 옵션이다. 블로그, 인스타그램, 유튜브같은 것에 최적이다. 이와 같은 경우에는 파이썬 + 장고 조합을 선택할 것이다. 필요한 것을 다 갖추었다. 유저, 인증, 뷰, 템플릿 등등 최적화 되어 있다.

- 그러나 그런 경우가 아닌, 우버와 같이 CRUD외에 리얼타임이 필요하다거나 API를 사용해야하는데 그게 자바스크립트 베이스라던가 그런경우에는 nodeJS를 사용하면 좋다.

- 넷플릭스는 nodejs를 자주 사용한다. CURD이외에도 리얼타임을 자주 하기 때문이다.

- 결론을 말하면, CRUD를 활용한다? 파이썬 + 장고 조합을 사용하는 것이 좋다.(루비는 이제 아무도 안쓴다.)

- 리얼타임, API등등을 활용한다? NodeJS를 사용하는 것이 좋다. 특히 커스터마이징이 많이 팔요할 때 좋다.

- 장고는 거대한 상자와 같아서, 그 안을 뒤지면서 필요없는 건 버리고, 필요한 것만 남겨놓고 작업을 해야한다.

- nodeJS는 그와 정반대로 안에 아무것도 없고, 레고 처럼 조합을 만들어야 한다.

  -------

백엔드, 서버를 빌드해야 하는 경우, 대표적인 웹 프레임워크(Web Framework)로서 Node.js, Django, Laravel, Spring 등이 있다.

![Image for post](https://miro.medium.com/max/60/1*01I2trhGiiqkawu0_A5fPA.png?q=20)

![Image for post](https://miro.medium.com/max/634/1*01I2trhGiiqkawu0_A5fPA.png)

Programming Language & Web Framework

오늘은 Node.js와 Django에 대해서 언제 어떤 프레임워크를 선택해야하는지를 알아볼 것이다. 프레임워크를 선택하기 전에 크게 네가지 관점에서 생각해보자.

1. *좋아하는 언어가 무엇인가?*
2. *도구를 만들 것인가, 기존 도구를 가져다 쓸 것인가?*
3. *많은 데이터를 움직여야 하는가?*
4. *하드웨어에 접근해야 하는가?*

------

## 좋아하는 언어가 무엇인가?

첫째, 좋아하는 언어를 선택하자.

만약 당신이 프론트 개발을 하고 있고, **JavaScript를 정말 좋아한다면 Node.js는 최상의 선택이다.** 왜냐하면 프론트는 좋던 싫던 간에 무조건 JavaScript를 사용해야 하는데, 만약 백엔드에서도 역시 JavaScript를 사용해 Node.js를 통해 개발한다면 개발 효율이 올라갈 것이다.

프론트에서는 JavaScript 이외에 언어 선택에 대한 다른 대안이 없다. 프론트 개발 언어는 오직 JavaScript뿐이기 때문이다. 하지만 백엔드의 경우에는 다른 대안이 많다. 예를 들면 Python, JavaScript, Ruby, PHP… 등 즉, 자유도가 높다는 것이다.

만약 당신이 JavaScript를 좋아하지 않는다면 백엔드에서는 많은 선택지가 있다. 좋아하는 언어를 선택하자.

## 도구를 만들 것인가, 기존 도구를 가져다 쓸 것인가?

둘째, 상대적으로 기본이 갖춰지고 이것저것 필요한 것들이 들어있는 프레임워크가 필요하다면 **Django**, 내가 쓸 기능들만 하나하나 직접 만드는 것을 좋아한다면 **Node.js**를 선택하자.

![Image for post](https://miro.medium.com/max/60/0*AfK27PLXEXUWiZiw?q=20)

![Image for post](https://miro.medium.com/max/5472/0*AfK27PLXEXUWiZiw)

Photo by [Glen Carrie](https://unsplash.com/@glencarrie?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

**Node.js**는 마치 *레고 블럭*이라고 보면 된다. 이게 무슨 말이냐면 Node.js에는 아무것도 들어있지 않다고 보면 되는데, 예를 들어서 작은 블록들을 하나하나 쌓아서 큰 성을 짓는 것과 같다고 생각하면 된다. 하나씩 붙여나가는 것을 좋아한다면 Node.js가 좋은 선택지가 될 것이다.

![Image for post](https://miro.medium.com/max/60/0*rxjQvv7irOh3VdUs?q=20)

![Image for post](https://miro.medium.com/max/3192/0*rxjQvv7irOh3VdUs)

Photo by [MARCIN CZERNIAWSKI](https://unsplash.com/@marcin777?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

그에 비해 **Django**를 선택한다면 이것은 마치 *큰 성*과 같다고 볼 수 있다. Node.js가 부품을 쌓아 올려서 큰 성을 만들었다면, Django는 이미 지어진 큰 성이기 때문에 그것의 사용법을 익혀야 한다. 당신이 기본적인 기능을 갖추고 있는 프레임워크를 원한다면 Django를 선택하자.

## 많은 데이터를 움직여야 하는가?

셋째, 만약 많은 데이터를 움직이고 다뤄야 한다면 **Node.js**를 이용하자.

![Image for post](https://miro.medium.com/max/60/0*m-EOZRY6qEFm7tJZ?q=20)

![Image for post](https://miro.medium.com/max/4032/0*m-EOZRY6qEFm7tJZ)

Photo by [Tobias Fischer](https://unsplash.com/@tofi?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

예를 들어 Database 생성, Database 삭제, Data 전송, Data 저장 등의 작업을 한다면 데이터를 다루는 성능이 좋은 **Node.js**를 사용하는 것이 좋다. **여기서 말하는 Data는 Data Science를 말하는 것이 아니라 많은 유저들이 메시지를 전송하고, 받고하는 실시간 처리 같은 작업을 의미한다.** 이런 경우에는 node.js는 좋은 성능을 보여줄 수 있다.

Django의 경우 python을 언어로 사용하는데 Python은 비동기 언어가 아니기 때문에 실시간 처리를 할 element가 없다. 그렇기 때문에 만약 채팅 기능을 만들고자 한다면 Node.js가 필요할 것이다.

## 하드웨어에 접근해야 하는가?

넷째, 하드웨어에 접근하고, Data Science나 이미지 압축 등을 해야한다면 **Django**를 선택하자.

![Image for post](https://miro.medium.com/max/60/0*DV4iB9k24F65wLac?q=20)

![Image for post](https://miro.medium.com/max/5530/0*DV4iB9k24F65wLac)

Photo by [Alexandre Debiève](https://unsplash.com/@alexkixa?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

하드웨어 접근에는 Node.js는 도움이 되지 않는다. 왜냐햐면 JavaScript는 메모리나 램, 즉 하드웨어에 접근할 수 없기 때문이다. JavaScript는 하드코어한 처리를 위해 설계된 것이 아니기 때문에 만약 당신이 이러한 것들을 하고 싶다면 Django를 쓰는 것이 좋다.

## 출처

[Node.js와 Django 중에서 무엇을 사용해야할까?](https://medium.com/@hshine1226/node-js%EC%99%80-django-%EC%A4%91%EC%97%90%EC%84%9C-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-ea8ae375aaaa)

[Django vs Node.js](https://sw-ko.tistory.com/76)