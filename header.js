// header.js
(function() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const userAvatar = document.getElementById("userAvatar");
  const avatarImg = document.getElementById("avatarImg");
  const username = document.getElementById("username");

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";

    if (userAvatar) {
      userAvatar.style.display = "flex";
      avatarImg.src = currentUser.avatar || "img/avata.png";
      username.textContent = currentUser.name;

      userAvatar.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.reload();
      });
    }
  }
// === Xử lý tìm kiếm: khi bấm Enter thì chuyển sang trang search.html ===
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

    // Lấy user đang đăng nhập từ localStorage
})();



