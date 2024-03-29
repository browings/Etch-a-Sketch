
const container = document.querySelector("#container");

let gritSize = 1; 

const buttonNewGrid = document.querySelector("#newGrid");




function newGrid() {
    gritSize = prompt("Please enter the new grid size (maximum is 100)");

    const removeOldGrid = document.querySelectorAll(".containerRow");


    removeOldGrid.forEach((element)=>{
        element.remove();
    })



    if (gritSize > 100) {

        gritSize = 100;           
    }




for (a=0; a < gritSize; a++) {
    const containerRow = document.createElement("div");
    containerRow.classList.add("containerRow");
    //containerRow.textContent = "RowRow";
       
    container.appendChild(containerRow)
   
    for (i=0; i < gritSize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    //box.textContent = "I'm a box";


    containerRow.appendChild(box);

        
       
        
    }
   
    let boxWidth = document.querySelector(".box").clientWidth; 
    (document.querySelectorAll(".box")).forEach ((element) => {
    element.style.height = (boxWidth+'px')});
    }




const boxListener = document.querySelectorAll(".box");

boxListener.forEach((element) => {
   
    element.addEventListener("mouseover", function (e) {
        e.target.style.background = "blue";
       
    });
  });

};

buttonNewGrid.addEventListener("click", newGrid)

//fixed height and width of the whole grid
//boxes changes their size in relation of the gridsize
