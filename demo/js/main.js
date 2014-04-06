jQuery( document ).ready(function() {

    $(".main-title").fallings({
        velocity: 3
    });

    $(".primary-image").fallings({
        velocity: .5,
        bgParallax: true,
        bgPercent: '50%'
    });

    $(".footer-image").fallings({
        velocity: .3,
        initialPosition: 100,
        bgParallax: true,
        bgPercent: '50%'
    });

});
