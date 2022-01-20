$(document).ready(function () {

    // Sticky Menu
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    // Active Link
    $("nav ul li").click(function () {
        $("nav ul li").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a").click(function () {
        $("nav ul li").removeClass("active");
        $("nav ul li:first-child").addClass("active");
    });

});