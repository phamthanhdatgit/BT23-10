$(document).ready(function() {
  const $slides = $(".slides");
  const $images = $(".slides img");
  const imageWidth = $images.outerWidth(true); // tính cả margin
  let currentIndex = 0;
  const totalImages = $images.length;
  const visibleCount = 5;

  // Hàm hiển thị ảnh
  function showSlide(index) {
    const offset = -index * imageWidth;
    $slides.css("transform", `translateX(${offset}px)`);
  }

  // Nút next
  $(".next").click(function() {
    currentIndex++;
    if (currentIndex > totalImages - visibleCount) currentIndex = 0;
    showSlide(currentIndex);
  });

  // Nút prev
  $(".prev").click(function() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = totalImages - visibleCount;
    showSlide(currentIndex);
  });

  // Tự động trượt
  setInterval(function() {
    currentIndex++;
    if (currentIndex > totalImages - visibleCount) currentIndex = 0;
    showSlide(currentIndex);
  }, 3000); // mỗi 3 giây đổi ảnh
});
