// Animation -

let TL = gsap.timeline();

TL
.from("#navbar",{
    opacity:0,
    y:30,
    duration:0.6
})
.from("#logo",{
    opacity:0,
    y:30,
    duration:1,
    delay:-1
})
.from("#hr",{
    opacity:0,
    y:30,
    duration:1,
    delay:-1
})
.from("#heading",{
    opacity:0,
    scale:1.5,
    duration:0.5
})
.from("#sub-heading",{
    opacity:0,
    y:30,
    duration:0.5,
})
.from("#para",{
    opacity:0,
    y:30,
    duration:0.5,
})
.from("#social",{
    opacity:0,
    x:-1000,
    duration:0.5,
})
.from("#portrait",{
    opacity:0,
    x:20,
    duration:2,
    delay:"-2"
})
.from("#arrow",{
    scale:0.1,
    duration:1
})
.to("#arrow",{
    y:20,
    yoyo:"true",
    repeat:-1
})