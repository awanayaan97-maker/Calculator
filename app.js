

let toggleOn = document.querySelectorAll("i")[0];

let toggleOF = document.querySelectorAll("i")[1];

let bgContainer = document.querySelector(".bgcontainer");

let input = document.querySelector("input");

let buttons = document.querySelectorAll(".rowbtn");

let buttonZero = document.querySelector(".rowbtn0");

let uniqueBtn = document.querySelectorAll(".uniqebtn");

let body = document.body;

toggleOF.addEventListener("click",function(){

    toggleOF.style.display = "none";

    toggleOn.classList.toggle("toggleon");

    toggleOn.style.display = "block"

 

    bgContainer.style.backgroundColor = "#111827";

     body.style.backgroundColor = "#020617"

    input.style.backgroundColor = "#020617"
    input.style.border = "1px solid #22c55e";
    input.style.color = "white"
    buttons.forEach(function(btn){

        btn.style.backgroundColor = "#1e293b";
        btn.style.color = "#e5e7eb"
        btn.style.border = "1px solid #22c55e";
    })

    buttonZero.style.backgroundColor = "#1e293b";
    buttonZero.style.color = "#e5e7eb";
    buttonZero.style.border = "1px solid #22c55e";
    
    uniqueBtn.forEach(function(btn){

     btn.style.backgroundColor = "#1e293b";
     btn.style.color = "#e5e7eb";
     btn.style.border = "1px solid #22c55e";
    })
})

toggleOn.addEventListener("click", function(){

  toggleOn.style.display = "none";
   toggleOn.classList.toggle("toggleon");
  toggleOF.style.display = "block";

  bgContainer.style.backgroundColor = "#ffffff";

  body.style.backgroundColor = '#f2f4f7'
    input.style.backgroundColor = "#ffffff"
    input.style.border = "1px solid #3b82f6";
    input.style.color = "black"
    buttons.forEach(function(btn){

        btn.style.backgroundColor = "#ffffff";
        btn.style.color = "#111827"
        btn.style.border = "1px solid rgb(21, 150, 236)";
    })

    buttonZero.style.backgroundColor = "#ffffff";
    buttonZero.style.color = "#111827";
    buttonZero.style.border = "1px solid rgb(21, 150, 236)";

    uniqueBtn.forEach(function(btn){

     btn.style.backgroundColor = "#ffffff";
     btn.style.color = "#111827";
     btn.style.border = "1px solid rgb(21, 150, 236)";

    })
})

let zeroBtn = document.querySelector(".rowbtn0");

buttons.forEach(function(btn) {

    if (btn.value !== "" && btn.value !== "%") {
    
     btn.addEventListener("click", function() {

    input.value += btn.value

   updateInputUI();


    });  
 }
});

zeroBtn.addEventListener("click", function(){

    if (zeroBtn.value !== "") {
        
      input.value += zeroBtn.value  
      updateInputUI();

    }
})

let deletingButtons = document.querySelectorAll(".uniqebtn");

deletingButtons[0].addEventListener("click", function(){

    if (input.value !== "") {
        
        input.value = ""
    }
})

deletingButtons[1].addEventListener("click", function () {
    
  input.value = input.value.slice(0, -1);
})

let equalBtn = document.getElementById("equal");

equalBtn.addEventListener("click", function(){

   if (input.value !== "") {
    
    let calculation = eval(input.value);
    input.value = calculation;
    updateInputUI();


   }
})

buttons[0].addEventListener("click", function () {

 let calculation = eval(input.value) / 100;

 input.value = calculation;
 updateInputUI();


})

function updateInputUI() {
    if (input.value !== "") {
        input.classList.add("input-active");
    } else {
        input.classList.remove("input-active");
    }
}
