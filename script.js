let checkBtn = document.querySelector(".checkAnswers")
let restartBtn = document.querySelector(".restartBtn")
let switchModeBtn = document.querySelector(".darkLightMode")
let startGame= document.querySelector(".start")
let allQuestions = document.querySelectorAll("input")
let labels = document.querySelectorAll("label")
let legends = document.querySelectorAll("legend")
let game= document.querySelector(".game")
let startingScreen= document.querySelector(".startingScreen")
let score= document.querySelector(".allTheRights")
let header = document.querySelectorAll("h2")
let felCheck = document.querySelectorAll(".check7")
let text= document.querySelectorAll("h1")
let testing = document.querySelector(".score")



let correctQuiz =()=>{
    if(rightAnsweres>=10*0.5 && rightAnsweres< 10*7.5){
        score.style.color="orange"
        score.innerHTML=`<h3> Du fick ${rightAnsweres} många poäng</h3>`
    }if(rightAnsweres > 10*0.75){
        score.style.color="green"
        score.innerHTML=`<h3> Du fick ${rightAnsweres} många poäng</h3>`
    }if (rightAnsweres < 10*0.5) {
        score.style.color="red"
        score.innerHTML=`<h3> Du fick ${rightAnsweres} många poäng</h3>`

    }
}


//startar spelet!
let playing = 0
let darkLight = 0
let rightAnsweres = 0
let checkbox1 = 0

switchModeBtn.addEventListener("click", ()=>{
    if(darkLight===0){
    document.body.style.backgroundColor="#272727"
    labels.forEach(e=>{
        e.style.color="white"
    })    
    legends.forEach(e=>{
        e.style.color="white"
    })
    text.forEach(e=>{
        e.style.color="white"
    })
    header.forEach(e=>{
        e.style.color="white"
    })
    if(score>0){
        
    correctQuiz()
    
    }
    darkLight=1
    }else if(darkLight===1){
        document.body.style.backgroundColor="white"
    labels.forEach(e=>{
        e.style.color="black"
    })    
    legends.forEach(e=>{
        e.style.color="black"
    })
    text.forEach(e=>{
        e.style.color="black"
    })
    header.forEach(e=>{
        e.style.color="black"
    })
    if(score>0){
        
        correctQuiz()
    }
    
    darkLight=0
    }
})

startGame.addEventListener("click", ()=>{
    game.style="display: block;"
startingScreen.style="display:none"
    console.log(game)
})

restartBtn.addEventListener("click",()=>{
    allQuestions.forEach(e=>{
        if (e.checked){
            e.checked=false}
    })
    score.innerHTML=""
    game.style="display: none;"
    startingScreen.style="display: flex;"
    rightAnsweres = 0
    checkbox1 = 0
    playing = 0

})

checkBtn.addEventListener("click", ()=>{
         if(playing===0){
            playing=1
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
    
    correctQuiz()
    
    
   
}
})


