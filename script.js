let checkBtn = document.querySelector(".checkAnswers")
let startGame= document.querySelector(".start")
let allQuestions = document.querySelectorAll("input")
let game= document.querySelector(".game")
let score= document.querySelector(".allTheRights")

//startar spelet!
let rightAnsweres = 0
let checkbox1 = 0
startGame.addEventListener("click", ()=>{
    game.style="display: block;"
    console.log(game)
})


checkBtn.addEventListener("click", ()=>{
         allQuestions.forEach(e=>{
        if(e.checked){
            if(e.id==="right"){
                rightAnsweres++
                
            }if(e.name==="svar7"){
            if(e.id==="right1" && !e.id==="fel1"){
            checkbox1++   
             }if(checkbox1 === 2){
                rightAnsweres++
            }
console.log(e)
            
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
