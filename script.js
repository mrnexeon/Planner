var main = function() {
    $('button[name="hide"]').on("click", function() {
        if ($(this).hasClass("hidden")) {
            $(this).removeClass("hidden").parent().find(".card-content").slideDown();
        } else {
            $(this).addClass("hidden").parent().find(".card-content").slideUp();
        }
    });
}

$('document').ready(main);