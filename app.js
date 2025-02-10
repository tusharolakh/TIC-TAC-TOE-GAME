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







CSS FILE
* {
    margin: 0;
    padding: 0;
}
body {
      background-color: #548687;
      text-align: center;
}

.container {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5vmin;

}
.game {
    height: 60vmin;
    width: 60vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5vmin;
}
.box {
    height: 18vmin;
    width: 18vmin;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0 1rem rgba(0,0,0,0.3);
    font-size: 8vmin;
    background-color: #ffffc7;
}

#resetbtn {
    padding: 1rem;
    font-size: 1.25rem;
    background-color: #191913;
    color: #fff;
    border-radius: 1rem;

}

#new-btn {
    padding: 1rem;
    font-size: 1.25rem;
    background-color: #191913;
    color: #fff;
    border-radius: 1rem;


}

#msg {
    color:  #ffffc7;
    font-size: 5vmin ;
}

.msg-container {
    height : 30vmin;
}

.hide {
    display: none;
} 






