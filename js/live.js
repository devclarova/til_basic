window.addEventListener("load", function () {
  // API 데이터
  const liveApiData = [
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250623/14/96/20250623070929.jpg",
      상태: "방송예정",
      제목: "[제주항공] 일본 소도시 포함 52개 노선 라이브 특가🧡",
      날짜: "06월 24일 (화)",
      시간: "11:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250623/14/96/20250623141053.jpg",
      상세설명: "[쿠폰 기획전] 제주항공 라이브 특가",
    },
    {
      uid: 2,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250619/14/96/20250619054358.png",
      상태: "방송예정",
      제목: "[루프트한자 독일항공] 유럽 주요 도시 노선 라이브 특가🤍",
      날짜: "06월 26일 (목)",
      시간: "11:00",
      상세이미지: "",
      상세설명: "",
    },
    {
      uid: 3,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250620/14/153/20250620024039.png",
      상태: "방송예정",
      제목: "[롯데시티&L7] 여름맞이 전국 도심 호캉스!",
      날짜: "06월 30일 (월)",
      시간: "19:00",
      상세이미지:
        "",
      상세설명: "",
    },
    {
      uid: 4,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250618/14/160/20250618020534.png",
      상태: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '스웨그에이지 외쳐, 조선!' -  임규형, 박정혁, 주다온, 진태화 배우 출연",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250618/14/160/20250618020747.png",
      상세설명: "월요라이브 자세히 보기!",
    },
    {
      uid: 5,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/159/20250617081952.png",
      상태: "라이브 다시보기",
      제목: "[몬드리안 이태원&테이크호텔 서울광명&인제 스피디움] 도심 호캉스&강원 숲캉스 특집!",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250618/14/159/20250618011940.png",
      상세설명: "테이크 호텔앤리조트 인제스피디움",
    },
    {
      uid: 6,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617021040.png",
      상태: "라이브 다시보기",
      제목: "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주 노선 특가👑",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617102911.jpg",
      상세설명: "[쿠폰 기획전] 싱가포르항공 라이브 특가",
    },
    {
      uid: 7,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/153/20250610023358.jpeg",
      상태: "라이브 다시보기",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "",
      시간: "",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 8,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      상태: "라이브 다시보기",
      제목: "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세설명: "[상품보기] 푸꾸옥 자유여행 혜택 보러가기",
    },
    {
      uid: 9,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      상태: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      상세설명: "월요라이브 자세히보기!",
    },
    {
      uid: 10,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      상태: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      상세설명: "월요라이브 자세히보기!",
    },
    {
      uid: 11,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      상태: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      상세설명: "월요라이브 자세히보기!",
    },
    {
      uid: 12,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      상태: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      상세설명: "월요라이브 자세히보기!",
    },
  ];

  // html 태그 만들고 배치하기
  const livepPos = document.querySelector(".sw_live .swiper-wrapper");
  let html = `
  `;

  //
  html = "";
  for (let i = 0; i < liveApiData.length; i++) {
    let detailImageTag = "";
    if(liveApiData[i].상세이미지) {
      detailImageTag = `
      <div class="live_detail_image">
      <img src="${liveApiData[i].상세이미지}" alt="${liveApiData[i].상세설명 || ""}" />
      </div>`;
    }

    let tag = `
                  <div class="swiper-slide">
                    <a href="${liveApiData[i].링크}" class="live_slide_item">
                      <div class="live_image${liveApiData[i].상태 === '라이브 다시보기' ? ' no_after' : ''}">
                        <img
                          src="${liveApiData[i].이미지}"
                          alt="${liveApiData[i].제목}"
                        />
                      </div>
                      <div class="live_info">
                        <div class="live_state">
                          <span class="live_wait">${liveApiData[i].상태}</span>
                        </div>
                        <p class="live_item_title">
                          ${liveApiData[i].제목}
                        </p>
                        <div class="live_day">
                          <div class="live_day_date">${liveApiData[i].날짜}</div>
                          <div class="live_day_time">${liveApiData[i].시간}</div>
                        </div>
                        <div class="live_detail">
                            ${detailImageTag}
                          <p class="live_detail_title">
                            ${liveApiData[i].상세설명}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
    `;
    html = html + tag;
  }

  livepPos.innerHTML = html;

  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
