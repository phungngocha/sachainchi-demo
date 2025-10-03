// Lấy giỏ hàng từ sessionStorage (nếu có)
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Thêm vào giỏ
function addToCart(product, qty, weight, price) {
  const existing = cart.find(item => item.name === product.name && item.weight === weight);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      name: product.name,
      img: product.img,
      weight: weight,
      price: price,
      qty: qty
    });
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  showToast(`Đã thêm ${qty} ${weight} - ${product.name} vào giỏ hàng!`);
}

// Cập nhật hiển thị giỏ
function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(index) {
  cart.splice(index, 1);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

// Thông báo
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Khi load trang thì cập nhật giỏ
document.addEventListener("DOMContentLoaded", updateCartUI);
