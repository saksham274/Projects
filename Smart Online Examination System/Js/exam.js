let time = 300;


// FULLSCREEN MODE

function openFullscreen() {
let elem = document.documentElement;
if (elem.requestFullscreen) {
elem.requestFullscreen();
}
}

openFullscreen();


// TIMER

let timer = setInterval(function(){

time--;

let minutes = Math.floor(time/60);
let seconds = time % 60;

document.getElementById("timer").innerHTML =
"Time: " + minutes + ":" + (seconds<10?"0"+seconds:seconds);

if(time<=0){
submitExam();
}

},1000);



// TAB SWITCH DETECTION

document.addEventListener("visibilitychange",function(){

if(document.hidden){

alert("Tab switching detected. Exam submitted.");
submitExam();

}

});



// QUESTION PALETTE COLOR CHANGE

for(let i=1;i<=10;i++){

let radios=document.querySelectorAll(`input[name="q${i}"]`);

radios.forEach(radio=>{

radio.addEventListener("change",function(){

document.getElementById("p"+i).classList.add("answered");

});

});

}



// SUBMIT EXAM

function submitExam(){

clearInterval(timer);

let score=0;

if(document.querySelector('input[name="q1"]:checked')?.value=="4") score++;
if(document.querySelector('input[name="q2"]:checked')?.value=="a") score++;
if(document.querySelector('input[name="q3"]:checked')?.value=="b") score++;
if(document.querySelector('input[name="q4"]:checked')?.value=="b") score++;
if(document.querySelector('input[name="q5"]:checked')?.value=="b") score++;
if(document.querySelector('input[name="q6"]:checked')?.value=="a") score++;
if(document.querySelector('input[name="q7"]:checked')?.value=="a") score++;
if(document.querySelector('input[name="q8"]:checked')?.value=="a") score++;
if(document.querySelector('input[name="q9"]:checked')?.value=="a") score++;
if(document.querySelector('input[name="q10"]:checked')?.value=="a") score++;

localStorage.setItem("score",score);

window.location.href="result.html";

}