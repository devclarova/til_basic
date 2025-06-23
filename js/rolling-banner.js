// 파일 로딩 완료 시 실행
window.addEventListener("load", () => {
  // 배너 데이터
  const bannerApiData = [
    { uid: 1, link: "#", image: "images/rolling/b1.png", title: "배너1" },
    { uid: 2, link: "#", image: "images/rolling/b2.png", title: "배너2" },
    { uid: 3, link: "#", image: "images/rolling/b3.png", title: "배너3" },
    { uid: 4, link: "#", image: "images/rolling/b4.png", title: "배너4" },
  ];
  // html 태그의 속성의 값 바꾸기
  // html 선택하기
  const bannerAnchortag = document.querySelector(".sale");
  const bannerImgTag = document.querySelector(".sale img");
  // 롤링 작동하기
  //   console.log("링크주소 : ", bannerAnchortag.href);
  //   console.log("이미지경로 : ", bannerImgTag.src);
  bannerAnchortag.href = bannerApiData[0].link;
  bannerImgTag.src = bannerApiData[0].image;
  bannerImgTag.alt = bannerApiData[0].title;
  //   알고리즘
  let startIndex = 0;
  let totalCount = bannerApiData.length;

  // 배너 교환해주는 기능
  const changeBanner = () => {
    startIndex = startIndex + 1;
    if (startIndex >= totalCount) {
      startIndex = 0;
    }
    bannerAnchortag.href = bannerApiData[startIndex].link;
    bannerImgTag.src = bannerApiData[startIndex].image;
    bannerImgTag.alt = bannerApiData[startIndex].title;
  }

  // 타이머 만들기
  let bannerTimer = setInterval(changeBanner, 1000);

  // 마우스 커서 배너 제어하기
  bannerAnchortag.addEventListener("mouseenter", () => {
    // 배너 타이머 지우기
    clearInterval(bannerTimer);
  });
  bannerAnchortag.addEventListener("mouseleave", () => {
    // 배너 타이머 다시 실행
    clearInterval(bannerTimer);
    bannerTimer = setInterval(changeBanner, 1000);
  });
});
