$(document).ready(() => {
    $("#str").val(''); // Clears input at every load/reload

    $("#btn").click(() => {
        // $.ajax({
        //     type: "GET",
        //     url: "http://localhost/getPW",
        //     data: {},
        //     dataType: "json",
        //     // success: function (response) {
                
        //     // }
        // }).done(((msg) => {
        //     alert(msg);
        // }));
        $.get('/getPW', (data, status) => {
            // console.log(data);
            // alert(data);
            $("#str").val(data);
        })

        // $("#str").val("HI!!");
    });
});