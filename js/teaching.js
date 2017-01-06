$(document).ready(function(){
    $("[data='total']").text( $('.slider').children().length );
    var mySlick = $('.slider').slick({
        arrows: true,
        dots: false,
        prevArrow: ".slider-button-nav-prev",
        nextArrow: ".slider-button-nav-next"
    }).on('afterChange', function(event, slick, currentSlide){
        $("[data='now']").text( currentSlide + 1 );
    });

    $(this).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                mySlick.slick('slickPrev');
            break;

            case 32: // space
            case 39: // right
                mySlick.slick('slickNext');
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });


    //Menu
    $(".menu li [data-summary]").click(function () {
        var mySummary = $(this).attr("data-summary");
        var myPosition = -1;
        var myFind = false;
        var mySlider = $(".slider");
        mySlider.find(".slick-slide").each(function () {
            if( ! myFind && $(this).find("[data-summary]").attr("data-summary") == mySummary ) {
                mySlider.slick("slickGoTo", myPosition, false);
                myFind = true;
            }
            myPosition++;
        });
    });
});
