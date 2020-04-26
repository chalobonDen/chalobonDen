//let member = ['윤지성','하성운','황민현','옹성우','김재환','강다니엘','박지훈','박우진','배진영','이대휘','라이관린'];
let member = ['<div class="pic"><img src="images/1.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/2.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/3.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/4.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/5.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/6.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/7.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/8.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/9.jpg" width="250px"></div>'
,'<div class="pic"><img src="images/10.jpg" width="250px"</div>'
,'<div class="pic"><img src="images/11.jpg" width="250px"</div>'];

let randomButton = document.getElementById('random');
let stopButton = document.getElementById('stop');
let output = document.getElementById('output');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let timeoutId,timeoutId1,timeoutId2 = 0;


randomButton.addEventListener('click', () => {
    timeoutId = setInterval(() => {
        let n = member.length;
        let index = Math.floor(Math.random() * n);
        let wannaone = member[index];
        output.innerHTML = wannaone;
    }, 50);

    timeoutId1 = setInterval(() => {
        let n = member.length;
        let index = Math.floor(Math.random() * n);
        let wannaone = member[index];
        output1.innerHTML = wannaone;
    }, 50);

    timeoutId2 = setInterval(() => {
        let n = member.length;
        let index = Math.floor(Math.random() * n);
        let wannaone = member[index];
        output2.innerHTML = wannaone;
    }, 50);
})

stopButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearTimeout(timeoutId1);
    clearTimeout(timeoutId2);
});


// เล่นเพลง
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}