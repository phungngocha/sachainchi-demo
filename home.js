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
  async function loadComponent(id, file, callback) {
      try {
        const res = await fetch(file);
        if (!res.ok) throw new Error('Fetch failed ' + file + ' : ' + res.status);
        const html = await res.text();
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = html;
        if (typeof callback === 'function') callback();
      } catch (err) {
        console.error('loadComponent error:', err);
      }
    }
    loadComponent("header", "header.html", () => {
  updateCartUI(); // cập nhật số giỏ hàng

  // Load header.js sau khi header đã load xong
  const script = document.createElement("script");
  script.src = "header.js";
  document.body.appendChild(script);

  // === Gắn lại sự kiện tìm kiếm ===
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const keyword = searchInput.value.trim();
        if (keyword) {
          window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
        }
      }
    });
  }
});

    loadComponent("footer", "footer.html");
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

let aboutIndex = 0;
const aboutSlider = document.getElementById("aboutSlider");
const totalAboutSlides = document.querySelectorAll(".about-slide").length;

document.getElementById("aboutNext").onclick = () => changeAbout(1);
document.getElementById("aboutPrev").onclick = () => changeAbout(-1);

function changeAbout(step) {
  aboutIndex += step;
  if (aboutIndex < 0) aboutIndex = totalAboutSlides - 1;
  if (aboutIndex >= totalAboutSlides) aboutIndex = 0;
  aboutSlider.style.transform = `translateX(-${aboutIndex * 100}%)`;
}
