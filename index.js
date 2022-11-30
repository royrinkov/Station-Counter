// document.getElementById("count").innerText =9

let count = 0;
let total = 0;
let countEl = document.getElementById('count-el')
let welcomeEl =document.getElementById('welcome-el')
let saveEl = document.getElementById('save-el')


function increment() {    
    count += 1; 
    countEl.innerText = count
    total +=1
}

function resetbtn(){

    count = 0
    countEl.innerText = count
}

function dayTotal(){
    countEl.innerText = total

}

function saveCount(){
    let countStr =count + " - "
    saveEl.textContent += countStr
    resetbtn()

    console.log(count)

}




// let fname = " roy"
// let greet = "Hi, my name is "
// welcomeEl.innerText = greet + fname
// console.log(welcomeEl) 