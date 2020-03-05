$(document).ready(() => {
    clearInp();

    $("#clear").click(() => {
        console.log("Clear button");
        clearInp();
    });

    $("#gen").click(() => {
        console.log("Generate button");
        addLoading();
        $.get('/getPW', (data, status) => {
            remLoading();
            $("#inp").val(data);
        });
    });

    function clearInp() {
        console.log("Clear function");
        $("#inp").val('');
    }

    function addLoading() {
        console.log("Loading");
        $("#gen").html("<span class='fa fa-spinner fa-spin'></span>");
    }

    function remLoading() {
        console.log("Not loading");
        $("#gen").html("Framleiða");
    }
});