
//Problem One//
let probOne = document.getElementById("container")
console.log(probOne)

//Problem Two//
let probTwo = document.querySelector("#container")
console.log(probTwo)

//Problem Three//
let probThree = document.querySelectorAll("li.second")
probThree.forEach((element)=> console.log(element))

//Problem Four//
let probFour = document.querySelector("ol")
probFour = probFour.getElementsByClassName("third")
console.log(probFour)

//Problem Five //

probTwo.insertAdjacentHTML("beforeend","Hello")

//Problem Six //

let probSix = document.querySelector(".footer");
probSix.classList.add("main");

//Problem Seven //

let probSeven = document.querySelector(".footer");
probSeven.classList.remove("main")

//Problem 8//
let probEight = document.createElement("li");

//Problem 9//
probEight.innerText = "four"

//Problem 10//
let probTen = document.querySelector("ul");
probTen.appendChild(probEight);

//Problem 11//
let probEleven = document.querySelectorAll("ol li");
for(let i = 0; i < probEleven.length; i++){
    probEleven[i].style.backgroundColor = "green";
}

//Problem 12//

let probTwelve = document.querySelector(".footer");
probTwelve.remove();