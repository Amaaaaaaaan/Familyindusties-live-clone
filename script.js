gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

function toggleMenu() {
    const nav2 = document.getElementById('nav2');
    nav2.classList.toggle('show');
}

var tl1 = gsap.timeline()
tl1.from("#linee", {
    x: -2000,
    duration: 0.1,
},"yo")
tl1.to("#leleph", {
    duration: 0.1,
    filter: "drop-shadow(0px 0px 55px rgba(0, 213, 255, 0.5))",
    repeat: 6,
    yoyo: true
},"yo");
tl1.to("#llive", {
    duration: 0.1,
    filter: "drop-shadow(0px 0px 55px rgba(255, 0, 238, 0.5))",
    repeat: 6,
    yoyo: true
},"yo");
tl1.to("#loader", {
    opacity:0,
    duration:0.01,
},"ro");



var tl2 = gsap.timeline({ paused: true })


tl2.from("#nav", {
    y: -100,
    duration: .1,
    delay:0.3,
}, "xo")
tl2.from("#left h1", {
    x: -800,
    duration: 0.1,
    delay:0.3
}, "xo")
tl2.from("#left p", {
    y: 200,
    duration: 0.1,
},)
tl2.from("#right video", {
    y: 1100,
    duration: 0.1,
    delay:0.3
}, "xo")
tl1.eventCallback("onComplete", function() {
    tl2.play(); // Start the second timeline
});

gsap.to("#page2 h1", {
    y: -20,
    opacity: 2,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page2",
        start: "top 90%",
        end: "top -100%",

        duration: 0.2,


    }
}
)
gsap.to("#i1", {
    y: -20,
    opacity: 2,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page2",
        start: "top 99%",
        end: "top -100%",
        duration: 0.2,


    }
}
)
gsap.to("#i2", {
    y: -20,
    opacity: 2,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page2",
        start: "top 85%",
        end: "top -100%",
        duration: 0.2,


    }
}
)
gsap.to("#i3", {
    y: -20,
    opacity: 2,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page2",
        start: "top 70%",
        end: "top -100%",
        duration: 0.2,


    }
}
)
gsap.to("#i4", {
    y: -20,
    opacity: 2,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page2",
        start: "top 10%",
        end: "top -100%",
        duration: 0.2,


    }
}
)
gsap.from("#page2 p", {
    y: 80,
    opacity: 3,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page2",
        start: "top 60%",
        end: "top -100%",
        duration: 0.1,



    }
}
)


gsap.from("#page3 #imgp", {
    x: -500,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page3",
        start: "top 60%",
        end: "top -90%",

        scrub: 2,

    }
}
)
gsap.from("#page3 #logopart", {
    x: 400,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page3",
        start: "top 60%",
        end: "top -90%",

        scrub: 2,

    }
}
)

gsap.to("#page3 #imgx", {
    y: -250,
    opacity: 2,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page4",
        start: "top 10%",
        end: "-100%",
scrub:2
    }
}
)





gsap.to("#page4 #imgpart,#textp", {
    x: -900,
    opacity: 3,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page4",
        start: "top 10%",
        end: "100%",
        pin: true,
        scrub: 2,
    }
}
)






var b1 = document.querySelector("#clickp #bar1")
var b2 = document.querySelector("#clickp #bar2")
var b3 = document.querySelector("#clickp #bar3")
var b4 = document.querySelector("#clickp #bar4")
var b5 = document.querySelector("#clickp #bar5")

var c1 = document.querySelector("#cards")



b1.addEventListener("click", function () {
    c1.style.transform = "translateX(0%)";
    b1.style.height = "0.6vh"
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})


b2.addEventListener("click", function () {
    c1.style.transform = "translateX(-20%)";
    b2.style.height = "0.6vh"
    b2.style.backgroundColor = "white";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})

b3.addEventListener("click", function () {
    c1.style.transform = "translateX(-40%)";
    b3.style.height = "0.6vh"
    b3.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";

})

b4.addEventListener("click", function () {
    c1.style.transform = "translateX(-60%)";
    b4.style.height = "0.6vh"
    b4.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})

b5.addEventListener("click", function () {
    c1.style.transform = "translateX(-80%)";
    b5.style.height = "0.6vh"
    b5.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})



gsap.from("#page6 h1,#page6 p,#page6  button", {
    y: 150,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page6",
        start: "top 85%",
        end: "-100%",

    }
}
)


gsap.from("#page7 h1,#page7 p", {
    y: 150,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page7",
        start: "top 85%",
        end: "-100%",

    }
}
)

gsap.from("#page8 img", {
    y: 350,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page8",
        start: "top 80%",
        end: "-100%",

    }
}
)

const menu = document.querySelector("#menu");

menu.addEventListener("click", function() {
    const menuPage = document.querySelector("#menupage");
    menuPage.classList.toggle("show");
});
