$(() => {

    //#region Header
    let searchIconE = $(".search .icon")
    let searchE = $(".search")
    let searchInputE = $(".search input")
    let htmlE = $('html, body')
    let headeE = $('header')
    let menuIconE = $(".menu-icon")
    let overlayE = $(".overlay")
    let menuE = $(".menu")
    let iconSubE = $('.btn-sub-menu')

    searchIconE.on('click', function () {
        searchE.toggleClass("active")
        searchInputE.focus()
    });

    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if (htmlE.scrollTop() > 0)
                headeE.addClass('active')
            else
                headeE.removeClass('active')
        }
    })
    menuIconE.on('click', function () {
        $(this).toggleClass("change")
        menuE.toggleClass("active")
        overlayE.toggleClass("show")
    });

    overlayE.on('click', function () {
        $(this).removeClass("show");
        menuE.removeClass("active");
        menuIconE.removeClass("change");
    });

    iconSubE.on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    })
    //#endregion

    //#region slide index
    let slideIndexE = $('.slide-index .owl-carousel');
    slideIndexE.owlCarousel({
        items: 1,
        nav: 0,
        dots: 1,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        onInitialized: function () {
            initialSlideOwl(slideIndexE)
        }
    });
    //#endregion slide index

    //#region service index
    let slideserviceIndexE = $('.slide-service-index .owl-carousel');
    slideserviceIndexE.owlCarousel({
        items: 3,
        nav: 0,
        dots: 1,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            767: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 3,
                margin: 27,
            },
        },
        onInitialized: function () {
            initialSlideOwl(slideserviceIndexE)
        }
    });
    //#endregion slide index

    //#region team index
    let slideteamIndex = $('.slide-team-index .owl-carousel');
    slideteamIndex.owlCarousel({
        items: 1,
        nav: 0,
        dots: 0,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            767: {
                items: 1,
                margin: 20,
            },
            992: {
                items: 1,
                margin: 25,
            },
        },
        onInitialized: function () {
            initialSlideOwl(slideserviceIndexE)
        }
    });
    let slideteamIndexSmaller = $('.slide-team-index-smaller .owl-carousel');
    slideteamIndexSmaller.owlCarousel({
        items: 4,
        margin: 25,
        nav: 0,
        dots: 0,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            767: {
                items: 1,
                margin: 20,
            },
            992: {
                items: 4,
                margin: 25,
            },
        },
        onInitialized: function () {
            initialSlideOwl(slideserviceIndexE)
        }
    });
    //#endregion team index

    // #region knowledge index
    let slideknowledgeIndex = $('.slide-knowledge-index .owl-carousel');
    slideknowledgeIndex.owlCarousel({
        items: 4,
        nav: 1,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>'],
        dots: 0,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            767: {
                items: 1,
                margin: 20,
            },
            992: {
                items: 4,
                margin: 25,
            },
        },
        onInitialized: function () {
            initialSlideOwl(slideserviceIndexE)
        }
    });
    // #endregion knowledge index

    // #region team
    let slideTeam = $('.slide-team .owl-carousel');
    slideTeam.owlCarousel({
        items: 4,
        nav: 0,
        dots: 0,
        margin: 25,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            767: {
                items: 1,
                margin: 20,
            },
            992: {
                items: 4,
            },
        },
        onInitialized: function () {
            initialSlideOwl(slideserviceIndexE)
        }
    });
   
    // #endregion team

    // #region other service
    let slideOtherService = $('.slide-other-service .owl-carousel');
    slideOtherService.owlCarousel({
        items: 3,
        nav: 0,
        dots: 0,
        margin: 25,
        autoplay: 1,
        loop: 1,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            767: {
                items: 1,
                margin: 20,
            },
            992: {
                items: 3,
            },
        },
        onInitialized: function () {
            initialSlideOwl(slideserviceIndexE)
        }
    });
    $('.slide-nav .next').click(function() {
        slideTeam.trigger('next.owl.carousel');
        slideOtherService.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.slide-nav .prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        slideTeam.trigger('prev.owl.carousel');
        slideOtherService.trigger('prev.owl.carousel');
    })
    // #endregion other service
})

function initialSlideOwl(elementSlide, isRemove = true) {
    let nav = elementSlide.find('.owl-nav');
    let dot = elementSlide.find('.owl-dots');

    if (nav.hasClass('disabled')) {
        if (isRemove)
            nav.remove();
    } else {
        nav.find('.owl-next').attr('role', 'button').attr('aria-label', "next");
        nav.find('.owl-prev').attr('role', 'button').attr('aria-label', "prev");
    }
    if (dot.hasClass('disabled')) {
        if (isRemove)
            dot.remove();
    } else {
        dot.find('.owl-dot').each(function (index) {
            $(this).attr('aria-label', index + 1);
        });
    }
    elementSlide.find('.owl-item:not(.active) .item img').attr('loading', 'lazy');
}
$(document).ready(function () {
    $(".about .question .list .item").click(function() {
        $(this).toggleClass("active");
        $(this).find(".detail-content").slideToggle();
    });

    $(".btn-form-calender").click(function() {
        $(".form-calender").addClass("active");
        $(".overlay").addClass("show1");
    })
    $(".btn-close").click(function() {
        $(".form-calender").removeClass("active");
        $(".overlay").removeClass("show1");
    })
})