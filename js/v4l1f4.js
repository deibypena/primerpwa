var iconEye = document.querySelectorAll(".icon-eye");
iconEye.forEach(function (iconEye) {
  iconEye.addEventListener('click', function () {
    let passwordInput = document.querySelectorAll('.passwordInput').forEach((passwordInput) => {
      if (passwordInput.type == "password") {
        passwordInput.type = "text"
        iconEye.style.opacity = "0.8";
      } else {
        passwordInput.type = "password"
        iconEye.style.opacity = "0.2";
      }
    })
  });
});