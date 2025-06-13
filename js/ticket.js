window.addEventListener("load", function () {
  // 카테고리 버튼 클릭하면 포커스 클래스 이동하기
  //   포커스 되었을 때 적용될 포커스 이름
  const focusName = "ticket_focus";
  const bts = document.querySelectorAll(".ticket_button_list li button");
  //   태그 등에 DOM들을 모아둔 배열을 다룰 때 추천 반복 문법
  bts.forEach(function (item) {
    item.addEventListener("click", function () {
      // 모든 버튼에서 tour_focus 클래스 제거
      removeFocus();
      // 클릭된 버튼은 tour_focus 클래스 추가
      item.classList.add(focusName);
    });
  });

  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    bts.forEach(function (item) {
      item.classList.remove(focusName);
    });
  }

  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
  });
});
