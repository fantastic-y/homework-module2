$(document).ready(function() {
    $(document).bind("click", function(e) {
        $(e.target).filter(".available").closest("td").toggleClass("selected");
    });
})