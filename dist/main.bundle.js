$(document).ready((function(){console.log("i am ready"),$("#my_svg").ready((()=>{alert("yooo")})),$(window).ready((function(){$("#loading").hide(),$("body").removeClass("fixed-top"),ScrollTrigger.refresh(),console.log("load success"),lozad().observe()})),$('[lang="en"]').hide(),$("#select_language").click((function(){$('[lang="tw"]').toggle(),$('[lang="en"]').toggle(),$(".collapse").hide(),$("body").removeClass("fixed-top")})),$(".navbar-toggler").click((function(){$(".collapse").toggle(),$("body").toggleClass("fixed-top")})),$(".collapse li").click((function(){$(".collapse").hide(),$("body").removeClass("fixed-top")})),$(document).scroll((function(){const e=$("#navbar");e.toggleClass("scrolled",$(this).scrollTop()>e.height()),function(e){$("#home_block").offset().top;const r=$("#aboutme_block").offset().top-30,t=$("#exp_block").offset().top-100,o=$("#skill_block").offset().top-60,a=$("#work_block").offset().top-60,i=$("#anticipation_block").offset().top-60,c=$("#contact_block").offset().top-80;e<r&&$(".nav-item").removeClass("active"),e>r&&($("#aboutme_item").addClass("active"),$("#aboutme_item").siblings().removeClass("active")),e>t&&($("#exp_item").addClass("active"),$("#exp_item").siblings().removeClass("active")),e>o&&($("#skill_item").addClass("active"),$("#skill_item").siblings().removeClass("active")),e>a&&($("#work_item").addClass("active"),$("#work_item").siblings().removeClass("active")),e>=i&&($("#anticipation_item").addClass("active"),$("#anticipation_item").siblings().removeClass("active")),e>=c&&($("#contact_item").addClass("active"),$("#contact_item").siblings().removeClass("active"))}($(document).scrollTop())})),$(".nav-item").click((function(){$(this).addClass("active"),$(this).siblings().removeClass("active")})),$(".brand").click((function(){$(".nav-item").removeClass("active")})),gsap.timeline({scrollTrigger:{trigger:".aboutme-wrapper",start:"top 80%",endTrigger:".exp-wrapper",end:"bottom top",toggleActions:"restart none none reset"}}).from(".aboutme-container",{yPercent:100,duration:1,ease:"back"}).from(".aboutme-container",{opacity:0,duration:.5},0),gsap.timeline({scrollTrigger:{trigger:".exp-wrapper",start:"top 80%",end:"bottom top",toggleActions:"restart none none reset"}}).from(".exp-wrapper .card",{xPercent:100,stagger:.2,duration:2,ease:"back"}).from(".exp-wrapper .card",{opacity:0,stagger:.2,duration:.5},0),gsap.timeline({scrollTrigger:{trigger:".anticipation-wrapper",start:"top 50%",end:"bottom top",toggleActions:"restart none none reset"}}).from(".item-content",{xPercent:100,stagger:.3,duration:2,ease:"power3"}).from(".item-content",{opacity:0,stagger:.2,duration:.5},0);const e=()=>{$(".circle .bar").circleProgress({startAngle:-1.55,size:140,fill:{gradient:["#36F1CD","#268874"]}}).on("circle-animation-progress",(function(e,r,t){})),$("#circle_html").circleProgress({value:.8}),$("#circle_css").circleProgress({value:.72}),$("#circle_sass").circleProgress({value:.65}),$("#circle_javascript").circleProgress({value:.65}),$("#circle_jquery").circleProgress({value:.6}),$("#circle_angular").circleProgress({value:.6}),$("#circle_react").circleProgress({value:.45}),$("#circle_redux").circleProgress({value:.4})},r=()=>{$("#circle_html, #circle_css,#circle_sass,#circle_javascript,#circle_jquery,#circle_angular,#circle_react,#circle_redux ").circleProgress({value:0})};ScrollTrigger.create({trigger:".skill-wrapper",start:"top 50%",end:"bottom top",onEnter:e,onEnterBack:e,onLeave:r,onLeaveBack:r}),gsap.timeline({scrollTrigger:{trigger:".work-wrapper",start:"top 80%",end:"bottom top",toggleActions:"restart none none reset"}}).from(".work-wrapper .card",{yPercent:100,stagger:.2,duration:2,ease:"power3"}).from(".work-wrapper .card",{opacity:0,stagger:.2,duration:.5},0)}));