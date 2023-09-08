// system no-1 :directly set on the HTML element
// <button onclick="console.log(99);">Another button</button>

// system no-2: add onclick function on the html element 
//(Mostly use this)
function makeRed(){
    document.body.style.backgroundColor='red';
}
// system no-3
const makeBlueButton = document.getElementById('make-blue');
 makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// system no-3(another way)
const purpleButton = document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple';
}
// system no-4
const pinkButton = document.getElementById('make-pink');
// console.log(pinkButton);
pinkButton.addEventListener('click',makePink )
function makePink(){
    document.body.style.backgroundColor='pink';
}
// system no-4 (another way)
const greenButton = document.getElementById('make-green');
// console.log(greenButton);
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green';
})
//system no-5 (Mostly use this)
document.getElementById('make-goldenrod').addEventListener('click', function (){
    document.body.style.backgroundColor='goldenrod'
})