var lineCount = 0;
addAddressLine = function () {
    var i = document.createElement('input');
    i.setAttribute("type", "text");
    i.setAttribute("placeholder", "Address Line " + ++lineCount);
    var addressContainer = document.getElementById("adress");
    addressContainer.appendChild(i);
}