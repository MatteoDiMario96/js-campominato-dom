const sectionGridAppend = document.querySelector("section#grid");
const buttonAppend = document.querySelector("button#new-match");
const selectDifficultyAppend = document.querySelector("#difficult");

const startFirstGame = document.createElement("h2");
startFirstGame.append("Inizia la partita scegliendo la difficoltà e premendo il tasto play !");
sectionGridAppend.appendChild(startFirstGame);

buttonAppend.addEventListener("click",function(){
    generateNewGame(sectionGridAppend, selectDifficultyAppend.value)
})




    //     FUNZIONI      //
//Genera numero random//
    function getRandomNumberInt (min, max){
    return Math.floor(Math.random() * (max + 1) - min) + min;
}
//Genera numero random unico//
function getUniqueRandomNumberInt (numeriGiaEstratti, min, max){

    let randomNumber;
    let isRandomNumberAlreadyExtracted = true;
    while(isRandomNumberAlreadyExtracted){
        randomNumber = getRandomNumberInt(min, max);

        if(numeriGiaEstratti.includes(randomNumber)){
            isRandomNumberAlreadyExtracted = true;
        } else{
            isRandomNumberAlreadyExtracted = false;
        }
    }
    return randomNumber 
}
//Genera nuova partita//
function generateNewGame (containerEl, difficultySelect){
    containerEl.innerHTML = "";
    let numberToCall = [];
    let bombArray = [];
    let cells;
    let difficulty;
    let gameOverVariable = false;
    let userScore = 0;
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
    //Creazione Square
    for(let i = 0; i < cells; i++){
        numberToCall.push(i + 1);
        const articleEl = document.createElement("article");
        articleEl.classList.add("square", difficulty);
        articleEl.append([i + 1])
        sectionGridAppend.appendChild(articleEl)
    
        
        articleEl.addEventListener("click", function(){
            if(bombArray.includes(i + 1)){
                gameOver(articleEl);
            }else{
                articleEl.classList.add("active");
            // console.log(`You've clicked: ${[i + 1]}`)
            }
            
        })
        articleEl.removeEventListener("click", gameOver)  
    }
    //Creazione Bombe
    switch(selectDifficultyAppend.value){
        case "hard":
        for(let i = 0; i < 16; i++){
                bombArray.push(getUniqueRandomNumberInt(bombArray, 1, 100));             
            }           
            break;
        case "very-hard":
            for(let i = 0; i < 16; i++){
                bombArray.push(getUniqueRandomNumberInt(bombArray, 1, 81));
            }
            break;
        case "crazy":
            for(let i = 0; i < 16; i++){
                bombArray.push(getUniqueRandomNumberInt(bombArray, 1, 49));
            }
            break;
    }
    console.log(bombArray)
}

function gameOver(elemento){
    elemento.classList.add("bomb");
}


