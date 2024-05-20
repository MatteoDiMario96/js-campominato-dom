const sectionGridAppend = document.querySelector("section#grid");
const buttonAppend = document.querySelector("button#new-match");
const selectDifficultyAppend = document.querySelector("#difficult");

const startFirstGame = document.createElement("h2");
startFirstGame.append("Inizia la partita scegliendo la difficoltà e premendo il tasto play !");
sectionGridAppend.appendChild(startFirstGame);

buttonAppend.addEventListener("click",function(){
    generateNewGame(sectionGridAppend, selectDifficultyAppend.value)
})


    
    
    
    
    
    getRandomNumberInt(1,100);
    getUniqueRandomNumberInt(bombArray,1, 100);
    console.log(getUniqueRandomNumberInt)
    
    
             //     FUNZIONI      //
function getRandomNumberInt (min, max){
    return Math.floor(Math.random() * (max + 1) - min) + min;
}


function getUniqueRandomNumberInt (numbersNotCall, min, max){
    if(max - min > numbersNotCall.length){
        return false
    }
    
    let randomNumber;
    let isFound = false;
    while(!isFound){
        randomNumber = getRandomNumberInt(min, max);

        if(numbersNotCall.includes(randomNumber) !== false){
            isFound = true;
        }
    }
    return randomNumber

}



function generateNewGame (containerEl, difficultySelect){
    containerEl.innerHTML = "";

    let NumbersNotCalls = [];
    let cells;
    let difficulty;
    switch(selectDifficultyAppend.value){
        case "hard":
            cells = 100;
            difficulty = "hard";
            break;
        case "very-hard":
            cells = 81;
            difficulty = "very-hard";
            break;
        case "crazy":
            cells = 49;
            difficulty = "crazy";
            break;
    }

    for(let i = 0; i < cells; i++){
        NumbersNotCalls = [i + 1];
        console.log(NumbersNotCalls)
        const articleEl = document.createElement("article");
        articleEl.classList.add("square", difficulty);
        articleEl.append([i + 1])
        sectionGridAppend.appendChild(articleEl)
    
    
        articleEl.addEventListener("click", function(){
            articleEl.classList.add("active");
            console.log(`You've clicked:${articleEl}`)
        })  
    }
}



