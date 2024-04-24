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

    iconSubE.on('click', function() {
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