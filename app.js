let boxes =  document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("CLICKED");
        if(turnO){ //playero
            box.innerText = "O";
            turnO = false;
        } else { //playerx
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; 
        checkwinner();
    });
});
const disabledbtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide"); 
    disabledbtn();
}
const checkwinner = () => {
    for(pattern of winpatterns){
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val = boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;
           if(pos1val != "" && pos2val != "" && pos3val!=""){
             if(pos1val === pos2val && pos2val === pos3val){
             console.log("WINNER",pos1val);
             showwinner(pos1val);
           } 
        }
    }
};
const resetgame = () => {
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide");

}; 
newgamebtn.addEventListener("click" ,resetgame);
resetbtn.addEventListener("click" ,resetgame);










