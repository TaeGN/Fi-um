# 천사투자단

## 9기 A308팀 gitlab repository

<br><br><br><br>

# 📝PR & Commit Message Rule

<summary>📌 PR & Commit 컨벤션</summary>

### Pull Request

- 명령 / 스프린트 명 / 이름

### Commit Message

- 명령 / 스토리 또는 테스크 / 내용

### Command keyword

- :heavy_plus_sign: ADD : 파일, 디렉토리 추가
- :black_nib: MOD : 파일 수정 (파일명 수정도)
- :scissors: DEL : 파일, 디렉토리 삭제
- :open_file_folder: MOVE : 파일, 디렉토리 이동
- :boom: MERGE : 브랜치 충돌 후 직접 Merge

## Branch Rule

### Branch classification

- master: 배포 가능한 안정된 버전
- develop: 기능 개발중인 브랜치, 모든 기능 개발은 develop의 하위 브랜치에서 진행
- feature: 개발중인 기능명으로 브랜치 생성, 영문 소문자와 언더바(\_)로 구성

예시

> master <br/>
> develop <br/> > &nbsp; └ frontend <br/> > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └ login <br/> > &nbsp; └ backend <br/> > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └ reservation <br/>

### Git branch 사용법

- 현재 branch 확인<br/>
  `git branch`
- 새로운 branch 생성하기<br/>
  `git branch 브랜치명`
- branch 이동하기<br/>
  `git switch 브랜치명`
- branch를 생성하면서 이동하기<br/>
  `git switch -c 브랜치명`
- 변경사항 복원하기<br/>
  `git restore 파일명`
- branch 삭제하기<br/>
  `git branch -d 브랜치명`
- branch push하기<br/>
`git push -u origin 브랜치명` (원격 레포지토리에 브랜치가 없을 때)<br/>
`git push`
</details>

---

<br>

# 📝DB

<summary>📌 DB 네이밍 컨벤션</summary>

## **1. 테이블 및 기타 관계는 단수형을 사용한다**

## **2. 테이블명 설정시 예약어, 약어는 피한다**

- 유기견 놀이 예약테이블 : ~~RV-devise~~ -> reservation-device

## **3. 테이블명은 소문자로 작성한다**

```
- 두 개 이상의 단어를 조합해서 쓸 때는 스네이크케이스로 쓴다.
- 한 단어일때는 소문자로 적는다.
```

## **4. 필드명은 스네이크 케이스 사용한다**

```
유기견 테이블 - 몸무게 : weight
```

## **5. 기본키 필드는 `접두어_no` 형식을 사용한다**

```
유기견놀이예약고유번호 : reservation_device_no
```

## **6. 외래키 필드이름은 참조한 테이블의 기본키 필드명을 사용한다**

```
입양후기게시판(post) 에서 이용자(member) 참조
-> 외래키 명 : member_no
```

## `DB 명명 규칙의 중요성`

#### ☑️ 이름은 오래간다.

데이터 구조는 일반적으로 어플리케이션 코드보다 훨씬 지속력이 높아 **영향력이 오래간다.**

#### ☑️ 이름은 계약이다.

한번 컬럼이나 테이블 이름을 정해 놓으면 개발 단계에서는 그 이름을 그대로 사용하기 때문에
**만약 컬럼과 테이블의 이름이 변경된다면 의존하고 있던 코드에서도 수정**이 일어나야 한다.

#### ☑️ 개발자 환경의 차이.

이름이 잘 정의된 테이블, 컬럼이 있다면 **개발자 본인과 다른 개발자들도 DB구조를 이해하는데 적은 시간이 소요된다.**

---

<br>

# ✔️ Merge Convention

** MR(Merge Request) 생성**

- 피드백이나 도움이 필요할 때 그리고 merge 준비가 완료되었을 때 Merge Request를 생성한다.

- 동료들의 리뷰가 끝난 후 준비가 완료되었다면 develop 브랜치(or develop-(FE/BE))로 반영을 요구한다

- develop 브랜치로 merge될 경우 conflict를 작업 중인 브랜치에서 미리 해결하고 진행한다.

- MR 생성 시 예시

  - MR 제목

  | 생성 목적 | MR 제목                              |
  | --------- | ------------------------------------ |
  | 기능 개발 | [issue_number] issue_name            |
  | 버그 픽스 | [issue_number] issue_name (Fix)      |
  | 코드 개선 | [issue_number] issue_name (Refactor) |

  - 예시

  ```
  | 기능 개발 | [#22] 로그인기능 구현  |
  | 버그 픽스 | [#22] 로그인기능 구현 (Fix)  |
  | 코드 개선 | [#22] 로그인기능 구현 (Refactor)|
  ```

  - MR 설명

  ```
  - Merge Request 이유:
   - feature 병합 / 버그수정 / 코드 개선 등
  - 세부내용:
    - 왜 해당 MR이 필요한지 최대한 다른 사람이 알아볼 수 있도록 적기
  - Relevant issue number:
    - 관련된 이슈 넘버가 있으면 이곳에 기입해주세요, ex) #000, #000
  ```

<br>
## 0. 코드 리뷰할 때 주의사항

- **nit 줄이기** : 사소하고 작은 문제로 주로 스타일 가이드 준수, 가독성 개선 등을 의미 / 전체적으로는 중요하지 않지만 품질 향상에 도움이 될 수 있는 부분에서 사용
- **변경 사이즈 줄이기** : 리뷰할 내용이 커지면 코드 리뷰하기 부담

## 1. 코드 리뷰 방식

|  타입  | 개요                                                                  | 설명                                                                                                     |
| :----: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **P1** | 이번에 반드시 반영되어야 하는 중대한 코드 수정 의견 (Request Changes) | 버그 가능성이 있거나 잘못된 구현인 경우. 만약 반영되지 않는다면 이에 대한 반대 의견도 낼 수 있어야 한다. |
| **P2** | 적극적으로 이야기했으면 하는 의견 (Request Changes)                   | 잠재적인 이슈나 확장성을 고려해야 하는 경우. 토론하며 의견 조율할 수 있다.                               |
| **P3** | 가능하다면 반영해주었으면 하는 의견 (Comment)                         | 지금 구현보다 더 나은 방향이 있는 경우. 이번 반영이 어렵다면 다음 작업에서도 고려해볼 수 있도록 한다.    |
| **P4** | 다음에 반영 되도 되는 의견 (Approve)                                  | 반영이 되지 않거나 반대 의견을 적극적으로 할 필요 없다.                                                  |
| **P5** | 사소한 의견 (Approve)                                                 | 무시해도 됨. 혹은 관련 나누고 싶은 점 나눌 수 있다.                                                      |
