// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Gallery image fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach(card => card.classList.add('fade-in-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  galleryCards.forEach(card => observer.observe(card));
});

// Swiper Gallery init — myGallery
const myGallery = new Swiper(".myGallery", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: false,
  },
  pagination: {
    el: ".myGallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".myGallery-next",
    prevEl: ".myGallery-prev",
  },
});

// Swiper Vertical Gallery init — verticalGallery
const verticalGallery = new Swiper(".verticalGallery", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".verticalGallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".verticalGallery-next",
    prevEl: ".verticalGallery-prev",
  },
});

// Video hover preview
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video-card video");

  videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.play();
    });
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});

// Page Fade-out Transition
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hostname !== window.location.hostname) return;
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location = this.href;
    }, 600);
  });
});

// Logo page transition fade
document.addEventListener("DOMContentLoaded", () => {
  const transitionEl = document.getElementById("page-transition");

  setTimeout(() => {
    transitionEl.classList.add("hide");
  }, 1800);

  const links = document.querySelectorAll("a");

  for (let link of links) {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function(e) {
        if (!this.hash && !this.href.includes("mailto:") && !this.href.includes("tel:")) {
          e.preventDefault();
          transitionEl.classList.remove("hide");
          setTimeout(() => {
            transitionEl.classList.add("hide");
          }, 800);
        }
      });
    }
  }
});
