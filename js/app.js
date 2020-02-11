// *********************************************** // 
// Here we have the external JavaScript statements //
// *********************************************** //
$(document).ready(function() {

    $("h1").click(function() {
        if ($(".menuOption").first().is(":hidden")) {

            $(".menuOption").show("slow", function showNext() {});

        } else {
            $(".menuOption").hide(1000);
        }
    });

    $("a").click(function() {
        $(".menuOption").hide(1000);

        var hash = this.hash;
        var navBarHeight = $(".navbar").height();

        $('html, body').animate({
            scrollTop: $(hash).offset().top - navBarHeight
        }, 800, function() {
            window.location.hash = hash - navBarHeight;
        });
    });

});