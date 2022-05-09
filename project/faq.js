$(document).ready(function () {
    // ajax request to read faq.json and create an accordion off it
    $.ajax({
        type: "get",
        url: "faq.json",
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
                    `<button class="acc-btn">` +
                        elem.title +
                        "</button>" +
                        `<div class="acc-content">` +
                        "</div`>" +
                        "<ul>" +
                        "</ul>" +
                        `<li class="bullet-1">` +
                        elem.bio +
                        "</li>"
                );
            });
            // select buttons and make then work with the accordion
            const btns = document.querySelectorAll(".acc-btn");
            function accordion() {
                this.classList.toggle("is-open");
                const content = this.nextElementSibling;
                if (content.style.maxHeight) content.style.maxHeight = null;
                else content.style.maxHeight = content.scrollHeight + "px";
            }
            // add click event listener to each button
            btns.forEach((el) => el.addEventListener("click", accordion));
            console.log(arr);
        },
    });
});
