var mytext1 = document.getElementById("mytext1");
var mytext2 = document.getElementById("mytext2");
var mytext0 = document.getElementById("mytext0");


var timer;
var studyPoint =0;
var playPoint =0;
var ticker =0;
function checktime(){
    timer = setInterval(function(){
        if (confirm('Are you sudying')) {
            studyPoint +=1;
            mytext1.innerText = studyPoint*10;
        } else {
            playPoint +=1;
            mytext2.innerText = playPoint*10;

        }
    },600*1000);
}
checktime();


function time2(){
    timer = setInterval(function(){
        ticker +=1
        mytext0.innerText = ticker+"s";
    },1000)}
time2();