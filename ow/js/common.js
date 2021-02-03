$(function() {
    $("nav li a").click(function() {
        $(this).siblings("a").removeClass("current");
    })
})