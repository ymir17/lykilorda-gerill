$(document).ready(() => {
    $("#str").val(''); // Clears input at every load/reload

    $("#btn").click(() => {
        $.get("/#", (data, status) => {
            //
        });

        $("#str").val("HI!!");
    });
});