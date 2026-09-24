
function largest() {

    let input = document.getElementById("numbers").value;

    let arr = input.split(",").map(Number);

    let large = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > large) {

            large = arr[i];

        }
    }

    document.getElementById("result").innerHTML =
        "Largest Number: " + large;
}

