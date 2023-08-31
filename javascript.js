var timer = 60;
var score = 0;
var hitrn;

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function makeBubble(){
    var bubble = "";
    
    for(var i=1; i<=155; i++) {
        // `` back tick are used to create the div instead of duble ""
        var rn = Math.floor(Math.random()*10)+1;
        bubble += `<div class="bubble">${rn}</div>`;
    }

    document.getElementById('Pbtm').innerHTML = bubble;
}

function runTimer(){
   var timerint = setInterval(function(){
    if(timer>0 ){
        timer--;
        document.querySelector('#timerval').textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.getElementById('Pbtm').innerHTML = `<h1>Game Over</h1>`;
    }
   },1000);
}

function getNewHit(){
    hitnum = Math.floor(Math.random()*10)+1;
    document.querySelector('#hitval').textContent = hitnum;
}

document.querySelector('#Pbtm').addEventListener('click', function(details){
      let clickedNum = Number(details.target.textContent);   

       if(hitnum === clickedNum){
         increaseScore();
         makeBubble();
         getNewHit();
       }
});


getNewHit();
runTimer();
makeBubble();