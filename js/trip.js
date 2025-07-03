window.addEventListener("DOMContentLoaded", function () {
  // 백엔드 데이터 불러오기
  async function getData() {
    try {
      const res = await fetch("/apis/trip.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // html 생성
  function makeHtml(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let tag = `
    <div class="swiper-slide">
  <a href="${obj.링크}" class="trip_slide_item">
    <div class="trip_image">
      <img
        src="${obj.이미지}"
        alt="${obj.alt}"
      />
    </div>
    <div class="trip_info">
      <div class="trip_icon">
        <img src="images/icon_w_logo_new.svg" alt="trip" />
        ${obj.대상}
      </div>
      <p class="trip_item_title">
        ${obj.상품타이틀}
      </p>
      <p class="trip_schedule">
    `;

      for (let j = 0; j < obj.스케쥴.length; j++) {
        tag = tag + `<span>${obj.스케쥴[j]}</span>`;
      }

      tag =
        tag +
        `</p>

<p class="trip_price">
  <b>${obj.상품가격}</b>
  원~
  <span class="m_line">
    ${
      obj.정상가
        ? Array.isArray(obj.정상가)
          ? obj.정상가.join(" ")
          : obj.정상가
        : ""
    }
  </span>
</p>
    </div>
  </a>
</div>`;

      html = html + tag;
    }

    // 실제 배치
    const tripItem = document.querySelector(".sw_trip .swiper-wrapper");
    tripItem.innerHTML = html;

    // 슬라이드 실행하기
    makeSlide();
  }

  // 슬라이드
  function makeSlide() {
    new Swiper(".sw_trip", {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".trip_slide_next",
        prevEl: ".trip_slide_prev",
      },
      breakpoints: {
        960: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
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
  }

  // 실행하기
  getData();
});
