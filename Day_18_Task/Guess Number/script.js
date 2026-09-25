//selecting input box,paragraph
    var guessnumber=document.getElementById("guessnumber")
    var result=document.getElementById("result")
    var score=document.getElementById("score")
  
  var randomnumber = Math.floor(Math.random()*100)+1
  var totalscore=100
 function check()
 {
    var enterednumber=guessnumber.value
    if(randomnumber==enterednumber)
 {
    console.log("right")
   result.textContent="right"
    alert("you won the task")
 }else{
  totalscore=totalscore-1
  score.textContent="score"+totalscore
  result.textContent="wrong"

 }
 }