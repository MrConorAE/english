// If a flex item is clicked, toggle the class "flip"
$(document).ready(function () {
    $(".card").click(function () {
        $(this).toggleClass("flip");
    });
});