$(document).ready(function() {
    $(".menu span").click(function() {
        $(".activeMenu").show()
    })
    $("#close").click(function() {
        $(".activeMenu").hide()
    })
});