$(document).ready(function() {
    $("#caption1").hide();
    $("#caption2").hide();
    $("#caption3").hide();

    $("#f1").click(function() {
        $("#caption1").toggle();
    });
    $("#f2").click(function() {
        $("#caption2").toggle();
    });
    $("#f3").click(function() {
        $("#caption3").toggle();
    });
});