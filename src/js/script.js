$(document).ready(function() {
  "use strict";

  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "slow"
    );
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50
        },
        1000
      );
    event.preventDefault();
    if (screen.width < 992) {
      $(".navbar-toggler").click();
    }
  });

  // AOS initialize
  AOS.init({
    disable: "mobile"
  });

  // Service Item Match Height
  $(".service-item").matchHeight({
    byRow: 0
  });

  // Magnific Popup
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
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
      titleSrc: function(item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find("img");
      }
    }
  });
});

// Add nav bg
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(".main-nav").addClass("nav-bg");
  } else {
    $(".main-nav").removeClass("nav-bg");
  }
});
