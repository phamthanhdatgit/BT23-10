$(document).ready(function() {
    $(".add-btn").click(function() {
        let text = $("#todo-input").val().trim();
        if (text === "") {
            alert("Vui lòng nhập công việc!");
            return;
        }

        let li = $("<li></li>").text(text);
        let delBtn = $("<button class='delete-btn'>X</button>");
        li.append(delBtn);

        li.hide().appendTo("#todo-list").fadeIn(300);
        $("#todo-input").val("");
    });

    $(document).on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    $(document).on("click", ".delete-btn", function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });
});
