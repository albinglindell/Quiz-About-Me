let checkBtn = document.querySelector(".checkAnswers")
let restartBtn = document.querySelector(".restartBtn")
let startGame= document.querySelector(".start")
let allQuestions = document.querySelectorAll("input")
let game= document.querySelector(".game")
let score= document.querySelector(".allTheRights")
let header = document.querySelector(".header")
let felCheck = document.querySelectorAll(".check7")

//startar spelet!
let rightAnsweres = 0
let checkbox1 = 0
startGame.addEventListener("click", ()=>{
    game.style="display: block;"
    console.log(game)
})

restartBtn.addEventListener("click",()=>{
    allQuestions.forEach(e=>{
        if (e.checked){
            e.checked=false}
    })
    score.innerHTML=""
    game.style="display: none;"
    rightAnsweres = 0
    checkbox1 = 0

})

checkBtn.addEventListener("click", ()=>{
         allQuestions.forEach(e=>{
        if(e.checked){
            if(e.id==="right"){  
                rightAnsweres++
            }if(e.name==="svar7"){
                for(let i = 0; i<felCheck.length; i++){
                    if(felCheck[0,1,2].checked){
                        checkbox1=0
                    }
                }
            if(e.id==="right1"){
            checkbox1++ 
             }
             if(checkbox1 === 2){
                rightAnsweres++
            }
console.log(checkbox1)
            
        } 
        }
        
    })
    
    
        

    if(rightAnsweres>=10*0.5 && rightAnsweres <= 10*0.75){
        score.style.color="orange"
        score.innerHTML=`<h1> Du fick ${rightAnsweres} många poäng</h1>`
    }else if(rightAnsweres > 10*0.75){
        score.style.color="green"
        score.innerHTML=`<h1> Du fick ${rightAnsweres} många poäng</h1>`
    }else{
        score.innerHTML=`<h1> Du fick ${rightAnsweres} många poäng</h1>`

    }

    rightAnsweres=0
    checkbox1=0
    
})

console.log(restartBtn)

