function openTab(event, tabNum) {

    var i;
    var tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    thing = document.getElementById("hide");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        thing.style.display = "none";
    }

    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }

    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className += " active";
}