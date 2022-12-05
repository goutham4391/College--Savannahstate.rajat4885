var savedTabWidth;
var blnTabAnimating = false;
$(document).ready(function () {
    savedTabWidth = $(".tab").css("width");
    $(".tab").click(function () {
        expandTab($(this).children('.details'));
    });

    $(".tab .details").click(function () {
        event.stopPropagation();
    });
});

function expandTab(tab) {
    if (blnTabAnimating == false) {
        blnTabAnimating = true;
        if ($(tab).is(':visible')) {
            $(".tab .details").hide();
            $(tab).hide();
            $(".tab h3 > div").removeClass("arrowDown");
            $(".tab h3 > div").addClass("arrowRight");
            $(".tab h3").removeClass("active");
        } else {
            $(".tab .details").hide();
            $(tab).show();
            $(".tab h3 > div").removeClass("arrowDown");
            $(".tab h3 > div").addClass("arrowRight");
            $(".tab h3").removeClass("active");
            $(tab).prev().children("div").removeClass("arrowRight");
            $(tab).prev().children("div").addClass("arrowDown");
            $(tab).prev().addClass("active");
        }
        blnTabAnimating = false;
    }
}