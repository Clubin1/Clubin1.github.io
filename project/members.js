$(document).ready(function () {
    // ajax request to read faq.json and display it
    $.ajax({
        type: "get",
        url: "members.json",
        beforeSend: function () {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            const arr = data.members;
            $("#team").html("");
            arr.forEach((elem) => {
                console.log(elem);
                $("#team").append(
                    "<h3>" +
                        elem.name +
                        "</h3>" +
                        elem.title +
                        "<br>" +
                        elem.bio +
                        "<br>"
                );
            });
            console.log(arr);
        },
    });
});
