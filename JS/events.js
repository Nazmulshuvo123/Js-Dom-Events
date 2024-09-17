//Option 1: directly set on the html element
//<button onclick="document.body.style.backgroundColor='yellow' ">Make Yellow</button>

//Option 2: add onclick"function on the html element". 
// Important, we will use this 
//<button onclick="makeRed()">Make red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//Option 3:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//Option 3 another

const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//Option 4:
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//Option 4 another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//Option 4: Final--> We use it more
// document.getElementById('orange').addEventListener('click',function(){})
document.getElementById('make-orange').addEventListener('click',function(){
    document.body.style.backgroundColor = 'orange'
})
