const squares = document.querySelectorAll(".square");
const message = document.getElementById("messageText");
const resetButton = document.getElementById("reset");
const h1 = document.querySelector("h1");
const modeButtons = document.querySelectorAll(".mode");
const colorDisplay = document.getElementById("colorCode");
var numSquares = 6;
var colors = colorsArray(numSquares);
var selectedColor;

colorApp();

function colorApp(){
    //logic for generating squares of random colors
    for(let i = 0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === selectedColor){
                message.textContent = "Correct!";
                resetButton.textContent = "PLAY AGAIN?";
                colorChange(clickedColor);
            }
            else{
                this.style.backgroundColor = "rgb(36, 35, 35)";
                message.textContent = "Incorrect! Please try again";
            }
        });
        reset(); 
    }
    //mode buttons event listeners
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function colorsArray(n){
    var colorArray=[];
    for(let i = 0; i < n; i++){
        colorArray.push(generateColor());       
    }
    return colorArray;
}

function colorChange(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColor(){
    return "rgb(" + getRandom(256) + ", " + getRandom(256) + ", " + getRandom(256)+")";
}

resetButton.addEventListener("click", function(){  
    reset();
});

function reset(){
    colors = colorsArray(numSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    h1.style.backgroundColor = "rgb(14, 111, 202)";
    resetButton.textContent = "NEW COLORS";
    message.textContent = "";
    for(let i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }   
}