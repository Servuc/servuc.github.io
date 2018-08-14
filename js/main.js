/**
 * Created by thomas on 27/11/15.
 */

$(document).foundation();

$("a[data]").click(function(){$('html, body').animate({scrollTop: $("[data-scroll='" + $(this).attr("data") + "']").offset().top}, 2000); return false;})
$(".fa-arrow-circle-o-up").click(function(){$('html, body').animate({scrollTop: 0}, 2000);});
$(document).bind('scroll', function()
{
    var myScrollVal = 300;
    var wh = $(window).height();
    var dt = $(document).scrollTop() + $(window).height() - myScrollVal / 2;
    if(wh > dt)
        $(".fa-arrow-circle-o-up").css("opacity", "0");
    else if(wh + myScrollVal < dt)
        $(".fa-arrow-circle-o-up").css("opacity", "1");
    else
        $(".fa-arrow-circle-o-up").css("opacity", "" + ((dt - wh) * 1 / myScrollVal).toFixed(2));
});