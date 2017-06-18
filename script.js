var main = function() {

    $('button[name="hide"]').on("click", function() {
        if ($(this).hasClass("hidden")) {
            $(this).removeClass("hidden").parent().find(".card-content").slideDown(300);
        } else {
            $(this).addClass("hidden").parent().find(".card-content").slideUp(300);
        }
    });

    $('button[name="add-task"]').on("click", function() {
        $(this).parent().find(".add-task-form").slideDown(300);
    });

    $('button[name="cancel"]').on("click", function() {
        $(this).parent().slideUp(300);
    });
}

$('document').ready(main);