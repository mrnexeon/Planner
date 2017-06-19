var main = function() {

    $('button[name="hide"]').on("click", function() {
        if ($(this).hasClass("hidden")) {
            $(this).removeClass("hidden").parent().find(".card-content").slideDown(300);
        } else {
            $(this).addClass("hidden").parent().find(".card-content").slideUp(300);
        }
    });

    $('button[name="add-task"]').on("click", function() {
        var $task = $('<li><i class="material-icons">radio_button_unchecked</i><input name="task-text"><time>в течение дня</time></li>');
        $(this).parent().find("ul").append($task);
        $task.children('input[name="task-text"]').focus();
    });

     $('ul').on("blur", 'input[name="task-text"]', function() {
         var text = $(this).val();
        $(this).replaceWith("<span>" + text + "</span>").after('<button name="edit-task"><i class="material-icons">edit</i></button><button name="remove-task"><i class="material-icons">delete</i></button>');
    });
}

$('document').ready(main);