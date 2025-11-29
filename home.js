(function () {
  // 🖼 ẢNH HERO SLIDESHOW
  const hero = document.getElementById("hero");
  const heroImages = [
    "img/Anhbg2.jpg",
    "img/trangchu2.png",
    "img/loi_ich_cua_sachi.webp"
  ];
  let currentImage = 0;

  function updateHeroBackground() {
    hero.style.backgroundImage = `url('${heroImages[currentImage]}')`;
  }

  // Tự động đổi hình
  updateHeroBackground();
  let slideInterval = setInterval(() => {
    currentImage = (currentImage + 1) % heroImages.length;
    updateHeroBackground();
  }, 5000);

  // Nút điều hướng
  document.getElementById("prevSlide").addEventListener("click", () => {
    clearInterval(slideInterval);
    currentImage = (currentImage - 1 + heroImages.length) % heroImages.length;
    updateHeroBackground();
  });

  document.getElementById("nextSlide").addEventListener("click", () => {
    clearInterval(slideInterval);
    currentImage = (currentImage + 1) % heroImages.length;
    updateHeroBackground();
  });

  // 🌿 DANH SÁCH SẢN PHẨM
  const productList = document.getElementById("productList");
  if (!productList) return;

  products.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card shadow-sm border-0 product-card h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">${p.name}</h5>
          
          <p class="product-price text-success fw-semibold">${p.prices[0]}</p>
          <a href="product-detail.html?id=${products.indexOf(p)}" class="btn btn-outline-success rounded-pill">
            Xem chi tiết
          </a>
        </div>
      </div>`;
    productList.appendChild(col);
  });

  // 🧩 Load header/footer
  
   

})();


const hero = document.querySelector(".hero");
const aboutLink = document.querySelector(".scroll-to-about"); // nút hoặc icon để cuộn

if (aboutLink) {
  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".about-section").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// 🌿 Hiệu ứng xuất hiện khi cuộn tới phần About
// window.addEventListener('scroll', () => {
//   const about = document.querySelector('.about-section');
//   const rect = about.getBoundingClientRect();
//   if (rect.top < window.innerHeight - 150) {
//     about.classList.add('visible');
//   }
// });

let currentSlide = 0;
const slides = document.querySelectorAll('.about-slide');
const slider = document.querySelector('.about-slider');

document.querySelector('.about-arrow.right').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.querySelector('.about-arrow.left').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

