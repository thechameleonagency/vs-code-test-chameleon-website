// Logos Slider Animation
gsap.to(".logos-track", {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: "none",
});

// Pause on Hover
document.querySelectorAll(".logos-track").forEach(track => {
    track.addEventListener("mouseenter", () => gsap.pause());
    track.addEventListener("mouseleave", () => gsap.play());
});

// Horizontal Scroll Animation
gsap.to(".scroll-container", {
    x: () => -(document.querySelector(".scroll-container").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top top",
        end: () => `+=${document.querySelector(".scroll-container").scrollWidth}`,
        scrub: true,
        pin: true,
    },
});

// News Slider
let currentNews = 0;
const newsItems = document.querySelectorAll(".news-item");
const totalNews = newsItems.length;

function showNews(index) {
    newsItems.forEach(item => item.classList.remove("active"));
    newsItems[index].classList.add("active");
}

// Auto-slide
setInterval(() => {
    currentNews = (currentNews + 1) % totalNews;
    showNews(currentNews);
}, 5000);

// Manual Navigation
document.querySelector(".news-nav .prev").addEventListener("click", () => {
    currentNews = (currentNews - 1 + totalNews) % totalNews;
    showNews(currentNews);
});

document.querySelector(".news-nav .next").addEventListener("click", () => {
    currentNews = (currentNews + 1) % totalNews;
    showNews(currentNews);
});

// Swipe Support
let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".news-slider").addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector(".news-slider").addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
        currentNews = (currentNews + 1) % totalNews;
        showNews(currentNews);
    }
    if (touchEndX > touchStartX + 50) {
        currentNews = (currentNews - 1 + totalNews) % totalNews;
        showNews(currentNews);
    }
});
