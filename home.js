// home.js
(function () {
  // const products = [
  //   {
  //     name: "Hạt Dinh Dưỡng Sacha Inchi",
  //     img: "img/product1.png",
  //     desc: "Hũ hạt Sacha Inchi nguyên chất, giàu Omega-3, 6, 9 tốt cho sức khỏe.",
  //     weights: ["250Gr", "500Gr"],
  //     prices: ["338.000₫", "422.500₫"]
  //   },
  //   {
  //     name: "Dầu Sacha Inchi Nguyên Chất",
  //     img: "img/product2.png",
  //     desc: "Dầu ép lạnh nguyên chất từ hạt Sacha Inchi, bổ sung Omega-3 cho cơ thể.",
  //     weights: ["100ml", "250ml"],
  //     prices: ["199.000₫", "399.000₫"]
  //   },
  //   {
  //     name: "Snack Sacha Inchi Rang Mộc",
  //     img: "img/product3.png",
  //     desc: "Snack hạt Sacha Inchi rang mộc, giòn thơm tự nhiên, không dầu mỡ.",
  //     weights: ["100Gr", "200Gr"],
  //     prices: ["85.000₫", "150.000₫"]
  //   },
  //   {
  //     name: "Bột Sacha Inchi",
  //     img: "img/product4.png",
  //     desc: "Bột dinh dưỡng từ hạt Sacha Inchi, giàu protein thực vật.",
  //     weights: ["250Gr", "500Gr"],
  //     prices: ["250.000₫", "450.000₫"]
  //   }
  // ];

  const productGrid = document.getElementById("productGrid");
  if (!productGrid) {
    console.error("Không tìm thấy #productGrid — kiểm tra home.html có phần tử này không");
    return;
  }

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4><a href="product-detail.html?id=${products.indexOf(p)}">${p.name}</a></h4>
      <p>${p.desc}</p>
      <div class="product-options">
        <label>Chọn Cân Nặng:</label>
        <select class="weight">
          ${p.weights.map((w, i) => `<option value="${i}">${w}</option>`).join("")}
        </select>
        <div class="product-price">${p.prices[0]}</div>
        <label>Số lượng:</label>
        <input type="number" class="quantity" value="1" min="1">
      </div>
      <button class="add-to-cart">Thêm vào giỏ</button>
    `;

    const select = card.querySelector(".weight");
    const priceEl = card.querySelector(".product-price");

    select.addEventListener("change", () => {
      priceEl.textContent = p.prices[select.value];
    });

    card.querySelector(".add-to-cart").addEventListener("click", () => {
      const qty = parseInt(card.querySelector(".quantity").value, 10) || 1;
      const weight = p.weights[select.value];
      const price = p.prices[select.value];

      // Gọi hàm chung từ script.js — script.js phải được load trước (như đã chỉnh)
      if (typeof addToCart === "function") {
        addToCart(p, qty, weight, price);
      } else {
        console.error("addToCart chưa được định nghĩa. Kiểm tra script.js đã load chưa.");
      }
    });

    productGrid.appendChild(card);
  });
})();
