// 파일 로딩 완료 시 실행
window.addEventListener("load", function () {
  // 배너 데이터

  type BannerDataType = {
    uid: number;
    link: string;
    image: string;
    title: string;
  };

  const bannerApiData: BannerDataType[] = [
    { uid: 1, link: "#", image: "images/rolling/b1.png", title: "배너1" },
    { uid: 2, link: "#", image: "images/rolling/b2.png", title: "배너2" },
    { uid: 3, link: "#", image: "images/rolling/b3.png", title: "배너3" },
    { uid: 4, link: "#", image: "images/rolling/b4.png", title: "배너4" },
  ];
  // html 태그의 속성의 값 바꾸기
  // html 선택하기
  const bannerAnchortag: HTMLAnchorElement | null =
    document.querySelector(".sale");
  const bannerImgTag: HTMLImageElement | null =
    document.querySelector(".sale img");
  // 롤링 작동하기
  //   console.log("링크주소 : ", bannerAnchortag.href);
  //   console.log("이미지경로 : ", bannerImgTag.src);

  // 방어 코드
  if (bannerAnchortag) {
    bannerAnchortag.href = bannerApiData[0].link;
  }
  if (bannerImgTag) {
    bannerImgTag.src = bannerApiData[0].image;
    bannerImgTag.alt = bannerApiData[0].title;
  }

  //   알고리즘
  let startIndex: number = 0;
  let totalCount: number = bannerApiData.length;

  // 타이머 만들기
  let bannerTimer: number = setInterval(function () {
    startIndex = startIndex + 1;
    if (startIndex >= totalCount) {
      startIndex = 0;
    }
    if (bannerAnchortag) {
      bannerAnchortag.href = bannerApiData[startIndex].link;
    }
    if (bannerImgTag) {
      bannerImgTag.src = bannerApiData[startIndex].image;
      bannerImgTag.alt = bannerApiData[startIndex].title;
    }
  }, 1000);

  // 마우스 커서 배너 제어하기
  bannerAnchortag!.addEventListener("mouseenter", function () {
    // 배너 타이머 지우기
    clearInterval(bannerTimer);
  });
  bannerAnchortag!.addEventListener("mouseleave", function () {
    // 배너 타이머 다시 실행
    clearInterval(bannerTimer);
    bannerTimer = setInterval(function () {
      startIndex = startIndex + 1;
      if (startIndex >= totalCount) {
        startIndex = 0;
      }
      bannerAnchortag!.href = bannerApiData[startIndex].link;
      bannerImgTag!.src = bannerApiData[startIndex].image;
      bannerImgTag!.alt = bannerApiData[startIndex].title;
    }, 1000);
  });
});
