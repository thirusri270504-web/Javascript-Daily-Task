function add(value) {
    document.getElementById("result").value += value;
}

function cal() {
    let result = document.getElementById("result");

    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}

function clr() {
    document.getElementById("result").value = "";
}