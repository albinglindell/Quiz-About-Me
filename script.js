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

//här har jag gjort en funktion som ändrar färgen på allt innehåll basseerat på color elementer.
let changeColor= (color)=>{
    //här loopar den igenom all text på sidan och ändrar dess färg
    labels.forEach(e=>{
        e.style.color=color
    })    
    legends.forEach(e=>{
        e.style.color=color
    })
    text.forEach(e=>{
        e.style.color=color
    })
    header.forEach(e=>{
        e.style.color=color
    })
}
// här har jag gjort en funktion som rättar quizet och färgar texten beroende på hur gra det gick.
let correctQuiz =()=>{
    if(rightAnsweres>=10*0.5 && rightAnsweres< 10*7.5){
        score.style.color="orange"
        score.innerHTML=`<h3> Du fick ${rightAnsweres}  poäng</h3>`
    }if(rightAnsweres > 10*0.75){
        score.style.color="green"
        score.innerHTML=`<h3> Du fick ${rightAnsweres} poäng</h3>`
    }if (rightAnsweres < 10*0.5) {
        score.style.color="red"
        score.innerHTML=`<h3> Du fick ${rightAnsweres} poäng</h3>`

    }
}


//Här skapar jag någtra variabler som jag använder mig av under spelets gång

//startar spelet!
let playing = 0
let darkLight = 0
let rightAnsweres = 0
let checkbox1 = 0


switchModeBtn.addEventListener("click", ()=>{
    if(darkLight===0){// Här tillexempel. im darklight är 0 så ska den ändra till börk bakgrund och anropåa funktionen som ändrar all text till vit.
    
        switchModeBtn.innerText="Ändra till ljustläge"
        document.body.style.backgroundColor="#272727"
        changeColor("white")// här har jag skrivit "white" så att i funktionens color element ändrar color till "white"

    darkLight=1// sen ändrar den darkLight till 1 så nästa gång man klickar så gör den else if istället.

    }else if(darkLight===1){//klickar man igen så görs den här if else istället.

        switchModeBtn.innerText="Ändra till mörkerläge"
        document.body.style.backgroundColor="white"
        changeColor("black")// här har jag skrivit "black" så att i funktionens color element ändrar color till "black"

    darkLight=0 //Sen ändrar den darkLight till 0 så nästa gång man klickar så gör den första if satsen istället.
    }
})

//den här ändrar lite style på mina element så spelet dyker upp och så att startsidan försvinner.
startGame.addEventListener("click", ()=>{
    game.style="display: block;"
    startingScreen.style="display:none"
})

//Här är min Starta om quiz knapp den ändrar tillbaks alla värden till startvärden
restartBtn.addEventListener("click",()=>{
//Här loopar den igenom alla inputs och ser till att allt som är inklickat slutar att vara inklickade
    allQuestions.forEach(e=>{
        if (e.checked){
            e.checked=false}
    })
//här tar den bort din förra score och ändrar tillbaks till startvärdena. och även tar fram startsidan där man kan ändra till dark/lightnmode
    score.innerHTML=""
    game.style="display: none;"
    startingScreen.style="display: flex;"
    rightAnsweres = 0
    checkbox1 = 0
    playing = 0

})

//den här knappen rättar dina svar.
checkBtn.addEventListener("click", ()=>{
    //om playing== 0 så ska den funka. den här gjorde jag så man inte ska kunna klicka på rätta knappen flera gånger så man får massa poäng.
    if(playing===0){
        playing=1// Här ändrar den playing till 1 så att man inte kan rätta mer än en gång.
        allQuestions.forEach(e=>{// loopar igenom alla svaren
            if(e.checked){//här kollar den efter alla svaren som är checkad
                if(e.id==="right"){//Här kollar den alla svar som är checkade som har ett id som är right. För alla som är right så plussar 1 på i rightAnsweres variabeln.
                    rightAnsweres++
                }if(e.name==="svar7"){//här är vi fortfarande i right allQuestions forEachen och letar efter elementet som har name="svar7"
                    //det vill säga fråga 7 som är min checkbox fråga
                    for(let i = 0; i<felCheck.length; i++){//här gör jag en for loop som kollar hur många checkboxar jag har
                        if(felCheck[0,1,2].checked){//om alla är checkade så läggas inget på i checkbox variabeln
                            checkbox1=0
                            }
                    }
                    if(e.id==="right1"){// men om inte alla är inklickade och man har klickat in en rätt så läggs 1 på i variabeln checkbox
                        checkbox1++ 
                    }
                    if(checkbox1 === 2){//har man båda rätt så ska checkbox vara 2 och det ska ge ett poäng till totalen
                        rightAnsweres++
                    }
                } 
            }  
        })
        correctQuiz()// här kallar jag min rättningsfunktion för att skriva ut rightAsweres i DOMen
    }
})
