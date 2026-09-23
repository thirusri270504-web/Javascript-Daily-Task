function factorial() {

    let num = document.getElementById("num").value;

    let res = 1;

    for (let i = 1; i <= num; i++) {
        res = res * i;
    }

    document.getElementById("output").innerHTML =
        "Factorial of " + num + " = " + res;
}
