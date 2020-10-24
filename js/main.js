$(document).ready(function () {

    // BACK TO TOP & NAVBAR
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.backtotop').addClass('show');
            $('.backtotop').removeClass('launch');
        } else {
            $('.backtotop').removeClass('show');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > window.innerHeight - 10) {
            $('nav').addClass('show');
        } else {
            $('nav').removeClass('show');
        }
    });
    $("#backtotop").click(function () {
        $('.backtotop').addClass('launch');
        setTimeout(() => {
            $('body,html').animate({
                scrollTop: 0
            }, 200);
        }, 500);
        return false;
    });

    $(window).on('scroll', function () {
        $("section").each(function () {
            if (isScrolledIntoView($(this))) {
                $(this).addClass("show");
            }
        });
    });

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


    // ! ==================================================
    // ! HERO GRAVITY EFFECT
    // ! ==================================================
    $('#jGravity').on('click', () => { // This can be changed to anything you like in order to trigger jGravity effect

        $("#jGravity").css("pointerEvents", "none");
        $("#jGravity").removeClass('jGravity');
        $("#jGravity").removeClass('pump');
        // $(".spaceship").addClass("gravity-img");
        // $(".astronaut").addClass("gravity-img");
        // $(".satellite").addClass("gravity-img");

        $('body header .hero').jGravity({ // jGravity works best when targeting the body
            target: 'everything', // Enter your target critera e.g. 'div, p, span', 'h2' or 'div#specificDiv', or even 'everything' to target everything in the body
            ignoreClass: 'ignoreMe', // Specify if you would like to use an ignore class, and then specify the class
            weight: 25, // Enter any number 1-100 ideally (25 is default), you can also use 'heavy' or 'light'
            depth: 1, // Enter a value between 1-10 ideally (1 is default), this is used to prevent targeting structural divs or other items which may break layout in jGravity
            drag: true // Decide if users can drag elements which have been effected by jGravity
        });


    });
    // ! ==================================================
    // ! HERO GRAVITY EFFECT
    // ! ==================================================


    // ! ==================================================
    // ! FOOTER TIMER
    // ! ==================================================
    var sec = 0;
    function pad(val) { return val > 9 ? val : "0" + val; }
    setInterval(function () {
        $("#second").html(pad(++sec % 60));
        $("#minute").html(pad(parseInt(sec / 60, 10)));
        $("#hour").html(pad(parseInt(sec / 3600, 10)));
    }, 1000);
    // ! ==================================================
    // ! FOOTER TIMER
    // ! ==================================================


    // ! ==================================================
    // ! GREET
    // ! ==================================================
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good evening';

    document.getElementById('greet').innerHTML = greet;
    // ! ==================================================
    // ! GREET
    // ! ==================================================


    // ! ==================================================
    // ! PORTFOLIO SLIDER
    // ! ==================================================
    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".portfolio-slider-wrapper #prev-btn"),
        nextArrow: $(".portfolio-slider-wrapper #next-btn"),
        dots: false,
        infinite: true,
        adaptiveHeight: true
    });
    // ! ==================================================
    // ! PORTFOLIO SLIDER
    // ! ==================================================

})