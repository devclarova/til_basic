window.addEventListener("DOMContentLoaded", () => {
  const closeBt: Element | null = this.document.querySelector(".popup_close");
  const popup: HTMLDivElement | null = this.document.querySelector(".popup");

  closeBt!.addEventListener("click", () => {
    popup!.style.display = "none";
  });
});