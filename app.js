let cardarray = [
    {
        'name' : 'Javascript',
        'img' :  'images/javscript.png',
    },
    {
        'name' : 'php',
        'img' :  'images/php.png',
    },
    {
        'name' : 'Cplus',
        'img' :  'images/Cpp.png',
    },
    {
        'name' : 'Java',
        'img' :  'images/Java.png',
    },
    {
        'name' : 'Csharp',
        'img' :  'images/Csharp.png',
    },
    {
        'name' : 'Python',
        'img' :  'images/Python.png',
    },
]

// Get the main Div of Html using DOM method...
const parentdiv = document.querySelector('#card-section');

//  Duplicate the card...
let gamecard = cardarray.concat(cardarray);

// Step 4
 
 const cardmatches = () =>{
    let cardselected = document.querySelectorAll(".card-selected");
    cardselected.forEach((e)=>{
        e.classList.add("card-match");
    })
 }
 const resetgame = () =>{
    count = 0;
    firstcard = "";
    seondcard = "";
    let cardselected = document.querySelectorAll(".card-selected");
    cardselected.forEach((e)=>{
        e.classList.remove("card-selected");
    })
}

let count = 0;
let firstcard = "";
let seondcard = "";
parentdiv.addEventListener('click', (events)=>{
    let curcard = events.target;
    if(curcard.id === "card-section"){
        return false;
    }
    count++;
    if(count<3){
        if(count == 1){
            firstcard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card-selected');
        }else{
            seondcard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card-selected');
        }
        if(firstcard !== "" && seondcard !== ""){
            if(firstcard === seondcard){
                setTimeout(()=>{
                    cardmatches();
                    resetgame();
                },1000);
            }else{
                setTimeout(()=>{
                    resetgame();
                },1000);
            }
        }
    }
})

let shuffleCard = Array.from(gamecard).sort(compareFN=()=> 0.5 - Math.random());
console.log(shuffleCard)
// Print and display all card on screen using For loop...
for(let i = 0; i <= shuffleCard.length -1; i++){
    let childDiv = document.createElement("div");
    childDiv.classList.add("card");
    childDiv.dataset.name = shuffleCard[i].name;
    // childDiv.style.backgroundImage = `url(${shuffleCard[i].img})`
    let front_div = document.createElement("div");
    front_div.classList.add('front-card');
    let back_div = document.createElement("div");
    back_div.classList.add('back-card');
    back_div.style.backgroundImage = `url(${shuffleCard[i].img})`
    parentdiv.appendChild(childDiv);
    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
}