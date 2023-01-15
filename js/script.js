$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  $(".owl-banner").owlCarousel({
    items: 1,
    loop: true,
    rtl: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-categories").owlCarousel({
    items: 6,
    loop: true,
    rtl: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".owl-portfolio").owlCarousel({
    items: 4,
    loop: true,
    rtl: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-Brand").owlCarousel({
    items: 5,
    loop: true,
    rtl: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  $(document).ready(function () {
    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 79,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  const dropdownOpener = $(".main-nav ul.nav .has-sub > a");

  // Open/Close Submenus
  if (dropdownOpener.length) {
    dropdownOpener.each(function () {
      var _this = $(this);

      _this.on("tap click", function (e) {
        var thisItemParent = _this.parent("li"),
          thisItemParentSiblingsWithDrop = thisItemParent.siblings(".has-sub");

        if (thisItemParent.hasClass("has-sub")) {
          var submenu = thisItemParent.find("> ul.sub-menu");

          if (submenu.is(":visible")) {
            submenu.slideUp(450, "easeInOutQuad");
            thisItemParent.removeClass("is-open-sub");
          } else {
            thisItemParent.addClass("is-open-sub");

            if (thisItemParentSiblingsWithDrop.length === 0) {
              thisItemParent
                .find(".sub-menu")
                .slideUp(400, "easeInOutQuad", function () {
                  submenu.slideDown(250, "easeInOutQuad");
                });
            } else {
              thisItemParent
                .siblings()
                .removeClass("is-open-sub")
                .find(".sub-menu")
                .slideUp(250, "easeInOutQuad", function () {
                  submenu.slideDown(250, "easeInOutQuad");
                });
            }
          }
        }

        e.preventDefault();
      });
    });
  }
  $(".post-module").hover(function () {
    $(this).find(".description").stop().animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      300
    );
  });

  //loader
  setTimeout(function () {
    $(".loader").fadeOut(500);
  }, 2000);

  
    new PureCounter();

});
