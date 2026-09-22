function countvowel(){
    let a = document.getElementById("inputtext").value;
    let count= 0;
    let vowel="aeiouAEIOU";
    for(let i=0;i<a.length;i++){
        if(vowel.includes(a[i])){
            count++;
        }
    }
    document.getElementById("result").innerHTML="vowel count" +  " " + count;


}
vowelcount();