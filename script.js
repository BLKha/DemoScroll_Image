const scrollContainer = document.querySelector(".gallery");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const items = document.querySelectorAll(".item");

function checkItemPosition() {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const itemRect = item.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
        // tính vị trí ở giữa cho item
        const scrollLeft = 
        itemRect.left - containerRect.left + scrollContainer.scrollLeft - containerRect.width / 2 + itemRect.width / 2;

      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    });
  });
}

scrollContainer.addEventListener("wheel", (e) => {
  //  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY * 2;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 580;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 580;
});

checkItemPosition();
