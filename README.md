# 🎵 Mucation

## Overview

🕗 개발기간: 2023. 12. 4 ~ 2023. 12. 11  

💻 배포 주소: https://mucation-project.vercel.app



<br/>

## 팀소개

김범수: 

김은비: https://github.com/eunbime

김명섭: https://github.com/kms99

시병택: https://github.com/BYEONGTAEK2023

전지현: https://github.com/jihyun-j

<br/>

## 프로젝트 소개

<aside>
🎶 내가 원하는 장소에서 내가 좋아하는 음악(영상)을 공유해 보자!

</aside>

<br/>

## Stack

### Environment
 
<img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/></a>

### Config

<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=white"/></a>
<img src="https://img.shields.io/badge/YARN-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"/></a>

### Development
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/></a> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/></a>

### Database

<img src="https://img.shields.io/badge/FIREBASE-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black"/></a>  

### API

<img src="https://img.shields.io/badge/YOUTUBE-FF0000?style=for-the-badge&logo=Youtube&logoColor=white"/></a>
<img src="https://img.shields.io/badge/KAKAO MAP-FFCD00?style=for-the-badge&logo=KaKao&logoColor=black"/></a>  

### Communication

<img src="https://img.shields.io/badge/SLACK-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/></a>
<img src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/></a>


<br>

## 화면구성

- 로그인 /  회원가입
    - Firebase Authenticator를 이용해 구글, 깃허브 및 이메일과 비밀번호를 사용해 회원가입 및 로그인


- 홈 - 지도 / 근처에서 공유된 영상들
    - 초기 위치는 내 위치로 지정하여 내 근처에서 공유된 영상 리스트를 볼 수 있음
    - 지도위에 마크된 위치에서 영상의 간단한 정보 보기 및 상세보기 이동 가능
 

- 게시글 작성 페이지
    - 유튜브 API를 이용해 공유하고 싶은 영상을 가져와서 추가
    - 제목과 내용을 입력하고 공유하고 싶은 위치를 지정해서 게시글을 작성

    
- 게시글 상세보기
    - Firebase에 영상에대한 정보를 저장해 두고, 공유된 영상에 대한 정보를 볼 수 있음
    - 공유된 게시글이 현재 로그인된 사용자가 게시한 영상이면 수정 및 삭제가 가능 (권한부여)
- 프로필
    - 내가 공유한 영상들 모아서 볼 수 있음
    - 내가 좋아하는 장르 추가 가능

<br>

## 주요기능

### 📌 위치를 지정해서 영상 공유 가능

- 내가 기억하고 싶은 장소 또는 공유하고 싶은 장소를 위치로 지정해 음악을 공유할 수 있어요

### 📌 내 근처에서 사람들과 함께 영상 시청 또는 감상

- 내가 공유한 음악을 근처 사람들과 함께 들을 수 있어요
- 특정 위치의 사람들과 음악을 공유할 수 있어요 (멀리 있지만 공감대 형성?)

<br/>

## 📂 아키텍처

```
src
 ┣ api
 ┃ ┗ posts.js
 ┣ assets
 ┣ axios
 ┃ ┣ firebaseApi.js
 ┃ ┣ locationApi.js
 ┃ ┗ youtubeApi.js
 ┣ components
 ┃ ┣ alertModal
 ┃ ┃ ┣ AlertModal.jsx
 ┃ ┃ ┣ AlertModalMainContainer.jsx
 ┃ ┃ ┣ BackDrop.jsx
 ┃ ┃ ┗ alertModal.styles.js
 ┃ ┣ common
 ┃ ┃ ┗ Button.jsx
 ┃ ┣ footer
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┗ Footer.styles.js
 ┃ ┣ header
 ┃ ┃ ┣ nav
 ┃ ┃ ┃ ┗ HeaderNav.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┗ Header.styles.js
 ┃ ┣ location
 ┃ ┃ ┣ CustomMarker.jsx
 ┃ ┃ ┣ CustomMarker.styles.js
 ┃ ┃ ┣ CustomOverlay.jsx
 ┃ ┃ ┣ CustomOverlay.styles.js
 ┃ ┃ ┣ Location.jsx
 ┃ ┃ ┣ Location.styles.js
 ┃ ┃ ┣ MapMarkerClusterer.jsx
 ┃ ┃ ┗ MapMarkerClusterer.styles.js
 ┃ ┣ map-control-button
 ┃ ┃ ┣ CustomControlBar.jsx
 ┃ ┃ ┣ LocationSearch.jsx
 ┃ ┃ ┣ LocationSearch.styles.js
 ┃ ┃ ┣ MapControlButton.jsx
 ┃ ┃ ┗ MapControlButton.styles.js
 ┃ ┗ post-list
 ┃ ┃ ┣ PostItem.jsx
 ┃ ┃ ┣ PostItem.styles.js
 ┃ ┃ ┣ PostList.jsx
 ┃ ┃ ┗ PostList.styles.js
 ┣ hooks
 ┃ ┣ useAlert.js
 ┃ ┣ useAuth.js
 ┃ ┣ useDebounce.js
 ┃ ┗ useInput.js
 ┣ pages
 ┃ ┣ detail
 ┃ ┃ ┣ Detail.styles.js
 ┃ ┃ ┣ DetailPageUserInfo.jsx
 ┃ ┃ ┣ DetailPageVideoArea.jsx
 ┃ ┃ ┣ EditDeleteArea.jsx
 ┃ ┃ ┗ index.jsx
 ┃ ┣ home
 ┃ ┃ ┣ Home.styles.js
 ┃ ┃ ┗ index.jsx
 ┃ ┣ login
 ┃ ┃ ┣ Login.styles.js
 ┃ ┃ ┣ LoginInputSection.jsx
 ┃ ┃ ┣ LoginSocialLoginSection.jsx
 ┃ ┃ ┗ index.jsx
 ┃ ┣ profile
 ┃ ┃ ┣ EditProfileModal.jsx
 ┃ ┃ ┣ EditProfileModal.styles.js
 ┃ ┃ ┣ UserCard.jsx
 ┃ ┃ ┣ UserPostCard.jsx
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ profile.styles.js
 ┃ ┗ write
 ┃ ┃ ┣ WriteModal.jsx
 ┃ ┃ ┣ WriteModal.style.js
 ┃ ┃ ┣ WriteModalSearch.jsx
 ┃ ┃ ┣ WriteModalSearch.stlye.js
 ┃ ┃ ┣ WritePageContext.jsx
 ┃ ┃ ┣ WritePageMap.jsx
 ┃ ┃ ┣ WritePageMap.styles.js
 ┃ ┃ ┣ WritePageTitle.jsx
 ┃ ┃ ┣ WritePageVideoArea.jsx
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ write.styles.js
 ┣ redux
 ┃ ┣ config
 ┃ ┃ ┗ configStore.js
 ┃ ┗ modules
 ┃ ┃ ┣ alertSlice.js
 ┃ ┃ ┣ authSlice.js
 ┃ ┃ ┣ currentVideoSlice.js
 ┃ ┃ ┣ mapSlice.js
 ┃ ┃ ┣ profileSlice.js
 ┃ ┃ ┗ seletcedVideoSlice.js
 ┣ shared
 ┃ ┣ Layout
 ┃ ┃ ┣ AuthLayout.jsx
 ┃ ┃ ┗ Layout.jsx
 ┃ ┗ Router.js
 ┣ styles
 ┃ ┣ img
 ┃ ┃ ┣ alertModal
 ┃ ┃ ┃ ┗ closeBtn.svg
 ┃ ┃ ┣ detailPage
 ┃ ┃ ┃ ┣ arrow-left.svg
 ┃ ┃ ┃ ┣ arrow-right.svg
 ┃ ┃ ┃ ┣ delete.svg
 ┃ ┃ ┃ ┣ edit.svg
 ┃ ┃ ┃ ┗ heart.svg
 ┃ ┃ ┣ loginPage
 ┃ ┃ ┃ ┣ github.svg
 ┃ ┃ ┃ ┣ google.svg
 ┃ ┃ ┃ ┗ home.svg
 ┃ ┃ ┗ map
 ┃ ┃ ┃ ┣ location.svg
 ┃ ┃ ┃ ┗ search.svg
 ┃ ┗ GlobalStyle.js
 ┣ App.js
 ┣ firebase.js
 ┣ index.js
 ┗ logo.svg
```
