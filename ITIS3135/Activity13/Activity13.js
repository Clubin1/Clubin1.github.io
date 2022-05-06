$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function () {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            const arr = data.teammembers;
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
