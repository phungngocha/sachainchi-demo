(function() {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const userAvatar = document.getElementById("userAvatar");
  const avatarImg = document.getElementById("avatarImg");
  const username = document.getElementById("username");

  if (currentUser) {
    // Ẩn login/register, hiện avatar + tên
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";

    if (userAvatar) {
      userAvatar.style.display = "flex";
      avatarImg.src = currentUser.avatar || "img/avata.png";
      username.textContent = currentUser.name;

      // Click vào avatar hoặc tên để logout
      userAvatar.addEventListener("click", () => {
        sessionStorage.removeItem("currentUser"); // xóa session
        window.location.reload(); // reload trang để cập nhật UI
      });
    }
  }

  // Xử lý tìm kiếm: Enter => search.html
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const keyword = searchInput.value.trim();
        if (keyword) {
          window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
        }
      }
    });
  }
})();
