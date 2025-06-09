const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
              {text:"Blue whale",correct:true},
                {text:"Elephant",correct:false},
                  {text:"Giraffe",correct:false},
        ]
    },{
         question:"Who painted the Mona Lisa?",
        answers:[
            {text:"Michelangelo",correct:false},
              {text:"Vincent van Gogh",correct:false},
                {text:"Leonardo da Vinci",correct:true},
                  {text:"Pablo Picasso",correct:false},]

    },{
         question:"Which planet is known as the Red Planet?",
        answers:[
            {text:" Mars",correct:true},
              {text:"Jupiter",correct:false},
                {text:" Saturn",correct:false},
                  {text:"Venus",correct:false},]

    },{
         question:"What is the tallest mountain in the world?",
        answers:[
            {text:"Mount Kilimanjaro",correct:false},
              {text:" Mount Fuji",correct:false},
                {text:"Mount Everest",correct:true},
                  {text:"K2",correct:false},]

    }
];
const questionbtn=document.getElementById("question");
const answerbtn=document.getElementById("answer-buttons");
const nextbtn=document.getElementById("next-btn");
let current=0;
let score=0;
function startquiz(){
    current=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentque=questions[current];
    let questiono=current+1;
    questionbtn.innerHTML=questiono + ". " + currentque.question;


    currentque.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.text){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetstate(){
nextbtn.style.display="none";
while(answerbtn.firstChild){
    answerbtn.removeChild(answerbtn.firstChild);
}
}
function selectAnswer(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";
}
function showscore(){
    resetstate();
    questionbtn.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="Play Again"; 
    nextbtn.style.display="block";
}
function handlenextbutton(){
    current++;
    if(current<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextbtn.addEventListener("click",()=>
{
    if(current< questions.length){
       handlenextbutton();
    }else{
        startquiz();
    }
})
 startquiz();



