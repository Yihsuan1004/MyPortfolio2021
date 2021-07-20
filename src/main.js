import '../src/styles/animate.css';
import '../src/styles/index.css';
import '../node_modules/jquery';
import '../node_modules/jquery-circle-progress';
import '../node_modules/slick-carousel';

$(document).ready(function () {
    $(window).on('load', function () {
        $('#loading').hide();
        $('body').removeClass('fixed-top');
        ScrollTrigger.refresh();
      }) 

    /* ---- 語言切換  ----*/
    $('[lang="en"]').hide();
    $('#select_language').click(function() {
        $('[lang="tw"]').toggle();
        $('[lang="en"]').toggle();
        $('.collapse').hide();
        $('body').removeClass('fixed-top')
    });

    $('.navbar-toggler').click(function(){
        $('.collapse').toggle();
        $('body').toggleClass('fixed-top')
    })

    $('.collapse li').click(function(){
        $('.collapse').hide();
        $('body').removeClass('fixed-top')
    });

    $(document).scroll(function () {
        const $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        let currentWindowOffset = $(document).scrollTop();
        navbarActive(currentWindowOffset);
    });

    $('.nav-item').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.brand').click(function () {
        $('.nav-item').removeClass('active');
    })

    function navbarActive(offset) {
        const home_offset = $('#home_block').offset().top;
        const aboutme_offset = $('#aboutme_block').offset().top - 30;
        const exp_offset = $('#exp_block').offset().top - 100;
        const skill_offset = $('#skill_block').offset().top - 60;
        const work_offset = $('#work_block').offset().top - 60;
        const anticipation_offset = $('#anticipation_block').offset().top - 60;
        const contact_offset = $('#contact_block').offset().top - 80;
        if (offset < aboutme_offset) {
            $('.nav-item').removeClass('active');
        }
        if (offset > aboutme_offset) {
            $('#aboutme_item').addClass('active');
            $('#aboutme_item').siblings().removeClass('active');
        }
        if (offset > exp_offset) {
            $('#exp_item').addClass('active');
            $('#exp_item').siblings().removeClass('active');
        }
        if (offset > skill_offset) {
            $('#skill_item').addClass('active');
            $('#skill_item').siblings().removeClass('active');
        }
        if (offset > work_offset) {
            $('#work_item').addClass('active');
            $('#work_item').siblings().removeClass('active');
        }
        if (offset >= anticipation_offset) {
            $('#anticipation_item').addClass('active');
            $('#anticipation_item').siblings().removeClass('active');
        }
        if (offset >= contact_offset) {
            $('#contact_item').addClass('active');
            $('#contact_item').siblings().removeClass('active');
        }
    }


    // ------------ Slider ------------ 
    $('.work-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
    });
    
    

    // ------------ Scroll Trigger Setting ------------ 
    let aboutmeTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutme-wrapper",
            start: "top 80%",
            endTrigger: ".exp-wrapper",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    }).from('.aboutme-container', { yPercent: 100, duration: 1, ease: "back" })
        .from('.aboutme-container', { opacity: 0, duration: 0.5 }, 0)


    let expTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".exp-wrapper",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    })
    .from('.exp-wrapper .card', { xPercent: 100, stagger: 0.2, duration: 2, ease: "back" })
    .from('.exp-wrapper .card', { opacity: 0, stagger: 0.2, duration: 0.5 }, 0)

    let atcpTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".anticipation-wrapper",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    })
    .from('.item-content', { xPercent: 100, stagger: 0.3, duration: 2, ease: "power3" })
    .from('.item-content', { opacity: 0, stagger: 0.2, duration: 0.5 }, 0)

    const setProgressValue = () => {
        let options = {
            startAngle: -1.55,
            size: 140,
            fill: { gradient: ["#36F1CD", "#268874"] }
        }
        $('.circle .bar').circleProgress(options).on('circle-animation-progress',
        function (event, progress, stepValue) { })
        $('#circle_html').circleProgress({ value: 0.80 });
        $('#circle_css').circleProgress({ value: 0.72 });
        $('#circle_sass').circleProgress({ value: 0.65 });
        $('#circle_javascript').circleProgress({ value: 0.65 });
        $('#circle_jquery').circleProgress({ value: 0.60 });
        $('#circle_angular').circleProgress({ value: 0.60 });
        $('#circle_react').circleProgress({ value: 0.45 });
        $('#circle_redux').circleProgress({ value: 0.40 });
    };

    const resetProgressValue = () => {
        $('#circle_html, #circle_css,#circle_sass,#circle_javascript,#circle_jquery,#circle_angular,#circle_react,#circle_redux ').circleProgress({ value: 0 });
    };

    ScrollTrigger.create({
        trigger: ".skill-wrapper",
        start: "top 50%",
        end: "bottom top",
        onEnter: setProgressValue,
        onEnterBack: setProgressValue,
        onLeave: resetProgressValue,
        onLeaveBack: resetProgressValue,
    })

    let workTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".work-wrapper",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    }).from('.work-wrapper .card', { yPercent: 100, stagger: 0.2, duration: 2, ease: "power3" })
        .from('.work-wrapper .card', { opacity: 0, stagger: 0.2, duration: 0.5 }, 0)

   

 


})