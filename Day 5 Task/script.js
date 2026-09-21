function printEven() {

    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = start; i <= end; i++) {

        if (i % 2 == 0) {

            output.innerHTML += i + "<br>";

        }
    }
}


function printOdd() {

    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = start; i <= end; i++) {

        if (i % 2 != 0) {

            output.innerHTML += i + "<br>";

        }
    }
}


function printAscending() {

    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = start; i <= end; i++) {

        output.innerHTML += i + "<br>";

    }
}


function printDescending() {

    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = end; i >= start; i--) {

        output.innerHTML += i + "<br>";

    }
}
