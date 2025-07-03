window.addEventListener("DOMContentLoaded", function () {
  // 백엔드 불러오기
  async function getData() {
    try {
      const res = await fetch("/apis/live.json");
      const result = await res.json();
      makeLiveHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // html 생성
  function makeLiveHtml(data) {
    let liveHtml = "";
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let tag = `<div class="swiper-slide">
                    <a href="${obj.링크}" class="live_slide_item">
                      <div class="live_image${
                        obj.상태 === "라이브 다시보기" ? " no_after" : ""
                      }">
                        <img
                          src="${obj.이미지}"
                          alt="${obj.제목}"
                        />
                      </div>
                      <div class="live_info">
                        <div class="live_state">
                          <span class="live_wait">${obj.상태}</span>
                        </div>
                        <p class="live_item_title">
                          ${obj.제목}
                        </p>
                        <div class="live_day">
                          <div class="live_day_date">${obj.날짜}</div>
                          <div class="live_day_time">${obj.시간}</div>
                        </div>
                        <div class="live_detail">
                          <div class="live_detail_image">
                              <img
                              src="${obj.상세이미지}"
                              alt="${obj.상세설명}"
                            />
                          </div
                          <p class="live_detail_title">
                            ${obj.상세설명}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>`;

      liveHtml = liveHtml + tag;
    }

    // 실제 배치
    const liveItem = document.querySelector(".sw_live .swiper-wrapper");
    liveItem.innerHTML = liveHtml;

    // 슬라이드 실행하기
    makeSlide();
  }

  // 슬라이드
  function makeSlide() {
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
  }

  // 실행하기
  getData();
});
