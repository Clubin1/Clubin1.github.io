$(document).ready(function () {
    $("a").click(function () {
        let toAdd = $(this).attr("title");
        $("#data").empty();
        $.ajax({
            type: "get",
            url: `./json_files/${toAdd}.json`,
            beforeSend: function () {
                $("#data").html("Loading...");
            },
            timeout: 10000,
            error: function (xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function (data) {
                const arr = data.speakers;
                $("#data").html("");
                arr.forEach((elem) => {
                    console.log(elem);
                    $("#data").append(
                        "<h1>" +
                            elem.title +
                            "</h1>" +
                            "<h2>" +
                            elem.month +
                            "</h2>" +
                            "<h3>" +
                            elem.speaker +
                            "</h3>" +
                            `<img src="${elem.image}"/>` +
                            "<p>" +
                            elem.text +
                            "</p>"
                    );
                });
                console.log(arr);
            },
        });
    });
});
