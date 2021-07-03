
document.getElementById("navbar").style.position = "fixed";
document.getElementById("navbar").style.top = 0;

function mouseenter(x) {
    x.style.backgroundColor = "red";
}

function mouseleave(x) {
    x.style.backgroundColor = "rgb(74, 138, 95)";
}

function changeimage() {
    var image = document.getElementById('myimage');
    if (image.src.match("1.jpg")) {
        image.src = "../img/2.jpg";
    }
    else if (image.src.match("2.jpg")) {
        image.src = "../img/3.jpg";
    }
    else if (image.src.match("3.jpg")) {
        image.src = "../img/4.jpg";
    }
    else if (image.src.match("4.jpg")) {
        image.src = "../img/5.jpg";
    }
    else {
        image.src = "../img/1.jpg";
    }
}

document.getElementById("myDIV").style.position = "fixed";

function getValue(data) {
    var myDiv = document.getElementById(data.id + '-value');
    myDiv.innerHTML = data.value;
}


function insrow() {
    var table = document.getElementById("tables");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var x = document.getElementById("name").value;
    var y = document.getElementById("skill").value;
    var z = document.getElementById("level").value;

    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;

}