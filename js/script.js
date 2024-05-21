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
function getRandomNumberInt (min, max){
    return Math.floor(Math.random() * (max + 1) - min) + min;
}

/**
 * 
 * @param {*} numeriGiaEstratti 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getUniqueRandomNumberInt (numeriGiaEstratti, min, max){
    if(max - min > numeriGiaEstratti.length){
        return false
    }
    let randomNumber;
    let isFound = false;
    while(!isFound){
        randomNumber = getRandomNumberInt(min, max);

        if(numeriGiaEstratti.includes(randomNumber)){
            isFound = true;
        }
    }
    return randomNumber
}



function generateNewGame (containerEl, difficultySelect){
    containerEl.innerHTML = "";

    let numberToCall = [];
    let bombArray = [];
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
        numberToCall.push(i + 1);
        const articleEl = document.createElement("article");
        articleEl.classList.add("square", difficulty);
        articleEl.append([i + 1])
        sectionGridAppend.appendChild(articleEl)
    
    
        articleEl.addEventListener("click", function(){
            articleEl.classList.add("active");
            console.log(`You've clicked: ${[i + 1]}`)
        })  
    }

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

    console.log(bombArray,numberToCall)


    
}


