/*   _0_|_1_|_2_
     _3_|_4_|_5_
      6 | 7 | 8 
    (012,345,678,036,147,258,048,246) 8 winning Pattern
*/

// console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.backgroundColor = "#EC368D";
            turnO = false;
            count ++;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#440381";
            turnO = true;
            count ++;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "#FFD6C0";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () => {
    msg.innerText = `This Round is a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkDraw = () =>{
    if(count === 9){
        showDraw();
        console.log("Draw");
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner: ",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
