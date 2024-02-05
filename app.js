var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 100 + "px",
        blur.style.top = dets.y - 100 + "px"


})

var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "0.1s"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #526087d0"
        crsr.style.backgroundColor = '#526087d0'

    })
})


gsap.to(".nav", {
    backgroundColor: "black",
    height: "10vh",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers : true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".content", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".content",
        scroller: "body",
        // markers : true,
        start: "top -40%",
        end: "top -80%",
        scrub: 2

    }
})

gsap.from(".about-us img , .about-us-in", {
    y: 90,
    x:90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us-in",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 65%",
        scrub: 3
    }
})


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#col1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        markers: false,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})


gsap.from("#col2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        markers: false,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from(".page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 75%",
        scrub: 3
    } 
})