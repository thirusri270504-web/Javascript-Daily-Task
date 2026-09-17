function positiveornegative(){

let number = -10;

        if (number > 0) {
            document.getElementById("result").textContent = "Positive";
        } 
        else if (number < 0) {
            document.getElementById("result").textContent = "Negative";
        } 
        else {
            document.getElementById("result").textContent = "Zero";
        }
}
positiveornegative();
