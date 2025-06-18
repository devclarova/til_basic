window.addEventListener("load", function () {
  // API 데이터
  const liveApiData = [
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617021040.png",
      상태: "방송예정",
      제목: "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주 노선 특가👑",
      날짜: "06월 18일 (수)",
      시간: "11:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617102911.jpg",
      상세설명: "[쿠폰 기획전] 싱가포르항공 라이브 특가",
    },
    {
      uid: 2,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/159/20250617081952.png",
      상태: "방송예정",
      제목: "[몬드리안 이태원&테이크호텔 서울광명&인제 스피디움] 도심 호캉스&강원 숲캉스 특집!",
      날짜: "06월 19일 (목)",
      시간: "19:00",
      상세이미지:
        "",
      상세설명: "",
    },
    {
      uid: 3,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/153/20250610023358.jpeg",
      상태: "라이브 다시보기",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 4,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 5,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 6,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 7,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 8,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 9,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 10,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 11,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
    {
      uid: 12,
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상태: "방송예정",
      제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      상세이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      상세설명: "휘닉스 리조트 평창",
    },
  ];

  // html 태그 만들고 배치하기
  const livepPos = document.querySelector(".sw_live .swiper-wrapper");
  let html = `
  `;

  //
  html = "";
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `
                  <div class="swiper-slide">
                    <a href="${liveApiData[i].링크}" class="live_slide_item">
                      <div class="live_image">
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
                          <div class="live_detail_image">
                            <img
                              src="${liveApiData[i].상세이미지}"
                              alt="${liveApiData[i].상세정보}"
                            />
                          </div>
                          <p class="live_detail_title">
                            ${liveApiData[i].상세정보}
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
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
