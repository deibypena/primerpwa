let mainNavegation = window.pageYOffset;
window.onscroll = function () {
  let navegationScroll = window.pageYOffset

  if (mainNavegation >= navegationScroll) {
    document.querySelector('.header').style.top = '0';
  } else {
    document.querySelector('.header').style.top = '-150px';
  }
  mainNavegation = navegationScroll;
}


let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 => {
  image_1.addEventListener('click', () => {
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
  image_2.addEventListener('click', () => {
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
  image_3.addEventListener('click', () => {
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

var swiper = new Swiper(".woman-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

const iconUser = document.getElementById("icon-user")
const loginFormContainer = document.getElementById("login-form-container")
const singUpFormContainer = document.getElementById("singUp-form-container")
const closebtn = document.getElementById("close-btn")
const closeSingUpBtn = document.getElementById("close-singUp-btn")
const createAccount = document.getElementById("create-account")

iconUser.addEventListener("click", () => {
  loginFormContainer.classList.add('active');
})

closebtn.addEventListener("click", () => {
  loginFormContainer.classList.remove('active');
})

closeSingUpBtn.addEventListener("click", () => {
  singUpFormContainer.classList.remove('active');
})

createAccount.addEventListener("click", () => {
  loginFormContainer.classList.remove('active');
  singUpFormContainer.classList.add('active');
})



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

// loader

window.onload = function () {
  fadeOut();
}

function loader() {
  document.querySelector('.section-loader').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 500);
}