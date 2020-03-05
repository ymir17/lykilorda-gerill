$(document).ready(() => {
    $(window).load(clearInp());
    /*
    How did jquery just stopped working!!?
    */

    $(".btn").click(() => {
        console.log("That was a button!");
    })

    $("#clear").click(() => {
        console.log("Hi");
        clearInp();
    });

    $("#gen").click(() => {
        console.log("sup");
        $.get('/getPW', (data, status) => {
            $("#inp").val(data);
        });
    });

    function clearInp() {
        console.log("Only once");
        $("#inp").val('');
    }
});