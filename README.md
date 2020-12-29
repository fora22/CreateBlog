# CreateBlog

## Overview
개인이 사용하는 Blog를 만들어 봄과 동시에 여러 웹의 생태계를 알아보자!
### [FoRA](https://github.com/fora22)
#### 만들고 싶은 Blog
1. 내 글(Markdown 형식)을 적을 수 있는 Blog
2. 작품 사진을 올리는 친구 개인 Blog

#### 구현 기능
1. 내 Blog
    - Markdown 글을 포멧에 맞게 변환(Jekyll 과 같은 정적 웹사이트도 괜찮다)
    - 하지만 [반응형 웹](https://vuejsexamples.com/minimal-blog-concept-with-vue-js-2/)도 원한다.
    - Comment System -> 꼭 게시물마다 있는 Comment 보단 채팅방 형태도 괜찮다(우선순위는 낮음).
2. 친구 Blog
    - 개인 작품(사진) 등을 올려놓는 Blog
    - 다른 사람의 접속 권한을 자유 자재로 조절할 수 있는 Blog

### [JSY](https://github.com/JSY8869)
#### E-on homepage
- 경기대학교 전자공학과 소프트웨어 동아리 E-on 17기를 위한 홈페이지를 제작 및 운영한다.
#### 구현 기능
- 메뉴가 있는 메인 페이지
- 익명 채팅방 같은 익명으로 질문하고 답할 수 있는 페이지
- 과제물을 올릴 수 있는 페이지(댓글 기능 필요)
- 참여권한을 부여하여 권한이 있는 사람만 들어올 수 있도록 하는 기능 (아이디나 간단한 코드를 사용)
- 각자의 정보를 공유할 수 있는 페이지
- 잡담 게시판 페이지
## Document
### Development Environment
It will be Update.
### Build and Run
It will be Update.
### Manual
- 모든 개발 작업은 *Develope* 폴더에서 작업한다.
  - 각자 작업은 닉네임 폴더 만들어서 할 것(ex: *fora22*)
  - `.gigignore` 파일 넣어서 커밋 용량 관리할 것
  - 가능하다면 설명이 필요한 폴더에 README 파일을 만들어 정리해놓을 것
- branch는 작성 양식이 있다.
  - `[닉네임]/Develope` 이 본인의 기본 branch
  - 가능한 특별한 기능 혹은 업데이트 시 `[닉네임]/Feature/[해당 기능 설명]` branch를 만들어 작업하고
  - 알았으면 하거나 질문 있는 경우 Pull Request를 남길 것

## License
MIT License
## Contributing
Isuuses, Pull Request, 개인적 연락 다 좋습니다.
 - fora22@naver.com
 
## Known issues
해당 Repository의 [위키](https://github.com/fora22/CreateBlog/wiki)를 참고 바람.

# Team Rule
## Meeting Rule
- 회의가 끝나면 다음 Review Meeting Issue 를 올린다.
- 회의(의견을 묻거나, ~해줬으면 or ~했으면 좋겠다 싶은 거, 진행에 있는 결정 사항 의논 등) 내용이 생길 때마다 Issue에 올려서 대화한다.
  - 이 때 각 주제별로 새로 Issue를 올리고 Review Meeting Issue에 링크를 남긴다.
  - #을 쓰면 알아서 Issue와 PR에 대한 링크를 고를 수 있다.
  - 만약 Issue를 올릴 정도로 복잡하지 않을 것 같다면 Review Meeting Issue에 comment를 남긴다.
- 회의 날짜까지 모든 Issue에 대하여 결론이 지어지면 해당 날짜의 회의는 없어진다.
- 만약 결론이 지어지지 않거나 Comment로 이야기를 나누기 어렵다는 생각이 들 경우 회의날짜에 회의를 진행한다.

## PR Rule
- PR이 올라가고 3일(72시간)안에는 Review를 해준다.
