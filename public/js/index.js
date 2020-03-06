$(document).ready(() => {
    // clearInp();
    $("#inp").val('');

    $("#copy").click(() => {
        console.log("Copy button");
        $("#isCopied").css("visibility", "visible");
        let copy = document.getElementById("inp");
        copy.select();
        copy.setSelectionRange(0, 99999);
        document.execCommand("copy");
    });

    $("#gen").click(() => {
        console.log("Generate button");
        addLoading();
        $("#inp").val('');
        $("#isCopied").css("visibility", "hidden");
        $.get('/get', (data, status) => {
            remLoading();
            $("#inp").val(data);
        });
    });

    // function clearInp() {
    //     console.log("Clear function");
    //     $("#inp").val('');
    // }

    function addLoading() {
        console.log("Loading");
        $("#gen").html("<span class='fa fa-spinner fa-spin'></span>");
    }

    function remLoading() {
        console.log("Not loading");
        $("#gen").html("Framleiða aftur");
    }
});