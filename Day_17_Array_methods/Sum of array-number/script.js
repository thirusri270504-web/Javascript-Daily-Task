
function sum() {

    let input = document.getElementById("numbers").value;

    let arr = input.split(",").map(Number);

    let total = 0;

    for (let i = 0; i < arr.length; i++) {

        total = total + arr[i];

    }

    document.getElementById("result").innerHTML =
        "Total: " + total;
}

