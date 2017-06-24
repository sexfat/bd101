$(function () {
    TweenMax.fromTo('.title', 1, {
        x : -20,
        y: -100,
        opacity: 0
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    });
    TweenMax.fromTo('.content', 1, {
        x: -150,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay : 1,
        ease: Elastic.easeOut.config(1, 0.3)
    });

    console.log('tween ok');
});