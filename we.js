Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.makeMagnet(".btndiv");
Shery.hoverWithMediaCircle(".hvr",{images : ["images/boy.jpeg","images/car1.png","images/boy.jpeg"]});

gsap.to(".fleftelm",
    {
        y:"-300%",
        ease: Power1,



        scrollTrigger:{
trigger:"#fimages",
pin:true,
start:"top top",
end:"bottom bottom",
endTrigger:".last",

scrub:1,

        }
    
    }
);













