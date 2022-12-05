var savedWidth;
var blnAnimating = false;
$(document).ready(function () {
    
            
    $("#selhelpPick").change(function () {
        expand($("#selhelpPick").val());
        $('html, body').animate({
            scrollTop: $("."+$("#selhelpPick").val()).offset().top - 19
        });
    });
});

function expand(persona) {
    expandTab($("."+persona).children('.details'));
}
