$(document).ready(function () {
  "use strict";
  //Copyright Date
  var newYear = document.getElementById("newYear");
  newYear.innerHTML = new Date().getFullYear();
  // AOS initialize
  AOS.init({
    duration: 800,
    once: true,
    disable: "mobile",
  });
  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });

  // Remove bootstrap's default dropdown behavior
  $(".nav-item.dropdown .dropdown-toggle").removeAttr("data-toggle");

  // Remove default arrow from dropdown toggle
  $(".nav-item.dropdown .dropdown-toggle").removeAttr("data-toggle").removeClass("dropdown-toggle");

  let dropdownTimeout;

  // Handle mouse enter on dropdown
  $(".nav-item.dropdown").on("mouseenter", function () {
    clearTimeout(dropdownTimeout);
    $(this).addClass("rotate");
    // Hide all other dropdowns
    $(".nav-item.dropdown .dropdown-menu").css({
      "opacity": "0",
      "visibility": "hidden",
      "transform": "translateY(20px)",
    });

    // Show current dropdown
    $(this).find(".dropdown-menu").css({
      "opacity": "1",
      "visibility": "visible",
      "transform": "translateY(0)",
    });
  });

  // Handle mouse leave on dropdown
  $(".nav-item.dropdown").on("mouseleave", function () {
    $(this).removeClass("rotate");
    const $dropdown = $(this);
    dropdownTimeout = setTimeout(function () {
      $dropdown.find(".dropdown-menu").css({
        "opacity": "0",
        "visibility": "hidden",
        "transform": "translateY(20px)",
      });
    }, 150);
  });

  // Handle click on dropdown items for mobile
  $(".navbar-toggler").on("click", function () {
    $(".dropdown-menu").css({
      "opacity": "0",
      "visibility": "hidden",
      "transform": "translateY(20px)",
    });
  });

  // Handle dropdown toggle click on mobile
  $(".nav-item.dropdown > a").on("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const $dropdown = $(this).parent().find(".dropdown-menu");
      $(".dropdown-menu").not($dropdown).css({
        "opacity": "0",
        "visibility": "hidden",
        "transform": "translateY(20px)",
      });

      if ($dropdown.css("visibility") === "visible") {
        $dropdown.css({
          "opacity": "0",
          "visibility": "hidden",
          "transform": "translateY(20px)",
        });
      } else {
        $dropdown.css({
          "opacity": "1",
          "visibility": "visible",
          "transform": "translateY(0)",
        });
      }
    }
  });
  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        1000
      );
    event.preventDefault();
    if (screen.width < 992) {
      $(".navbar-toggler").click();
    }
  });

  // Service Item Match Height
  $(".service-item").matchHeight({
    byRow: 0,
  });

  // .blog-content Match Height
  $(".blog-content").matchHeight({
    byRow: 0,
  });
  $(".story-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".quotes-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".clients-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // Magnific Gallery
  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});

// Add nav bg
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".main-nav").addClass("nav-bg");
  } else {
    $(".main-nav").removeClass("nav-bg");
  }
});

// community
const counters = document.querySelectorAll(".counter");
const speed = 200;

const animateCounter = (counter) => {
  const target = parseInt(counter.getAttribute("data-target"));
  let count = 0;
  const inc = target / speed;

  const updateCount = () => {
    if (count < target) {
      count = Math.ceil(count + inc);
      counter.innerText = count;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  {threshold: 0.5}
);

counters.forEach((counter) => observer.observe(counter));

/* JavaScript for Success Story Slider Initialization */
$(".success-slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "linear",
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
});

// Initialize Spaces Slider
$(".spaces-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
});
