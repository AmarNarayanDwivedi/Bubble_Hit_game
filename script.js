function makebubble(){
    
    var clutter = '';
    for(var i = 1; i<=102 ; i++) {
        var rn = Math.floor(Math.random()*10);
      clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#ButtomPnl').innerHTML = clutter ;
}
makebubble()

var timer = 60;
function tictic(){
    var time = setInterval(function(){
        if (timer > 0) {
            timer --;
            document.querySelector('#Timerval').innerHTML = timer;}
        else {
            clearInterval(time);
            document.querySelector('#ButtomPnl').innerHTML= `<h1> Game Over</h1>`
            }
    } , 1000);
        
}
 tictic();

 var hit ;
 function hitcount() {
    hit = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hit;
 }
 hitcount();

var score = 0 ; 
document.querySelector('#scoreval').textContent = score ;

 function scorecount(){
    score += 10;
    document.querySelector('#scoreval').textContent = score ;
 }



 document.querySelector('#ButtomPnl').addEventListener('click',function(dets){
    var clikednum = Number(dets.target.textContent);
    console.log(clikednum)
    if(clikednum === hit){
        scorecount();
        tictic();
        makebubble();
        hitcount();
    }
 })