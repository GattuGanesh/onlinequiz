const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");
//view for 1
const qN=document.querySelector(".q-n");
const qT=document.querySelector(".q-t");
const oC=document.querySelector(".o-c");
//view for 2
const qN1=document.querySelector(".q-n1");
const qT1=document.querySelector(".q-t1");
const oC1=document.querySelector(".o-c1");
//view for 3
const qN2=document.querySelector(".q-n2");
const qT2=document.querySelector(".q-t2");
const oC2=document.querySelector(".o-c2");

//view for 4
const qN3=document.querySelector(".q-n3");
const qT3=document.querySelector(".q-t3");
const oC3=document.querySelector(".o-c3");
//view for 5
const qN4=document.querySelector(".q-n4");
const qT4=document.querySelector(".q-t4");
const oC4=document.querySelector(".o-c4");
//view for 6
const qN5=document.querySelector(".q-n5");
const qT5=document.querySelector(".q-t5");
const oC5=document.querySelector(".o-c5");
//view for 7
const qN6=document.querySelector(".q-n6");
const qT6=document.querySelector(".q-t6");
const oC6=document.querySelector(".o-c6");
//view for 8
const qN7=document.querySelector(".q-n7");
const qT7=document.querySelector(".q-t7");
const oC7=document.querySelector(".o-c7");
//view for 9
const qN8=document.querySelector(".q-n8");
const qT8=document.querySelector(".q-t8");
const oC8=document.querySelector(".o-c8");
//view for 10
const qN9=document.querySelector(".q-n9");
const qT9=document.querySelector(".q-t9");
const oC9=document.querySelector(".o-c9");

const homeBox=document.querySelector(".home-box");
const quizBox=document.querySelector(".quiz-box");
const resultBox=document.querySelector(".result-box");

const viewBox=document.querySelector(".view-box")
const viewBox1=document.querySelector(".view-box1")
const viewBox2=document.querySelector(".view-box2")
const viewBox3=document.querySelector(".view-box3")
const viewBox4=document.querySelector(".view-box4")
const viewBox5=document.querySelector(".view-box5")
const viewBox6=document.querySelector(".view-box6")
const viewBox7=document.querySelector(".view-box7")
const viewBox8=document.querySelector(".view-box8")
const viewBox9=document.querySelector(".view-box9")
let questionCounter=0;
let questionCounter1=0;
let currentQuestion;
let currentview;
let availableQuestion=[];
let view=[]
let availableOption=[];
let correctAnswer=0;
let attempt=0;
let answers=[]

//push the questions into availableQuestions Array
function setAvailableQuestions(){
const totalQuestion=quiz.length;
for(let i=0;i<totalQuestion;i++){
    availableQuestion.push(quiz[i])
}
}
function getNewQuestion(){
    //set question number
    questionNumber.innerHTML="Question " + (questionCounter + 1) + " of " + quiz.length;
    //set question text
    //get random question a
    const questionIndex=availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
    currentQuestion=questionIndex;
    view[questionCounter]=questionIndex;
   // console.log(view)
    questionText.innerHTML=currentQuestion.q;
    //get the position of 'questionIndex' from availableQuestion Array
    const index1=availableQuestion.indexOf(questionIndex)
    //removing the 'questionIndex' from the availableQuestions Array, so that the question does not repeat
    availableQuestion.splice(index1,1); 
   // console.log(questionIndex)
    //console.log(availableQuestion)
    const optionLen = currentQuestion.options.length
    //push operationsinto availableOption array
    for(let i=0;i<optionLen;i++)
    {
        availableOption.push(i)
    }  
    //create options in html
    let animationDelay=0.2;
    optionContainer.innerHTML=''
    for(let i=0;i<optionLen;i++){
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.style.animationDelay=animationDelay+'s';
        animationDelay=animationDelay+0.2;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)")
    }
    questionCounter++;

}
function getResult(element){
    const id=parseInt(element.id);

    //get the answer by comparing the id of clicked option
    if(id === currentQuestion.answer){
        element.classList.add("correct")
        //console.log("answer is correct")
        correctAnswer++;
    }
    else{
        //console.log("answer is wrong")
      
        element.classList.add("wrong");
    }
    attempt++;
    
    unclickableOption();
}
// make all the option unclickable once the user select option
function unclickableOption(){
    const optionLen=optionContainer.children.length;
    for(let i=0;i<optionLen;i++){
        optionContainer.children[i].classList.add("already-answered")
    }
    }
function next(){
    if(questionCounter === quiz.length){
       
        quizOver();
    }
    else{
        getNewQuestion();
    }
    
}
function quizOver(){
      //hide quiz quizbox
      quizBox.classList.add("hide");
      //show result box
      resultBox.classList.remove("hide");
      quizResult();
}
function quizResult(){
    
    resultBox.querySelector(".total-question").innerHTML=quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML=attempt;
    resultBox.querySelector(".total-correct").innerHTML=correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML=attempt-correctAnswer;
}
function viewAnswer()
{  
    //for viewing answer 1
    viewBox.classList.remove("hide");
    qN.innerHTML="Qestion " + (1) + " of " + quiz.length;
    qT.innerHTML=view[0].q;
   const optlen = view[0].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen;i++)
    {
        availableOption.push(i)
    }
    oC.innerHTML=''
    for(let i=0;i<optlen;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[0].options[i];
        opt.id = i;
        opt.className = "opt";
       
        oC.appendChild(opt)
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[0].options[view[0].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC.appendChild(opt)
    }
    
    //for viewing answer 2
    viewBox1.classList.remove("hide");
    qN1.innerHTML="Qestion " + (2) + " of " + quiz.length;
    qT1.innerHTML=view[1].q;
   const optlen1 = view[1].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen1;i++)
    {
        availableOption.push(i)
    }
    oC1.innerHTML=''
    for(let i=0;i<optlen1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[1].options[i];
        opt.id = i;
        opt.className = "opt";
        oC1.appendChild(opt)
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[1].options[view[1].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC1.appendChild(opt)
    }


//for viewing answer 3
    viewBox2.classList.remove("hide");
    qN2.innerHTML="Qestion " + (3) + " of " + quiz.length;
    qT2.innerHTML=view[2].q;
   const optlen2 = view[2].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen2;i++)
    {
        availableOption.push(i)
    }
    oC2.innerHTML=''
    for(let i=0;i<optlen2;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[2].options[i];
        opt.id = i;
        opt.className = "opt";
        oC2.appendChild(opt)
        
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[2].options[view[2].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC2.appendChild(opt)
    }



    //for viewing answer 4
    viewBox3.classList.remove("hide");
    qN3.innerHTML="Qestion " + (4) + " of " + quiz.length;
    qT3.innerHTML=view[3].q;
   const optlen3 = view[3].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen3;i++)
    {
        availableOption.push(i)
    }
    oC3.innerHTML=''
    for(let i=0;i<optlen3;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[3].options[i];
        opt.id = i;
        opt.className = "opt";
        oC3.appendChild(opt)
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[3].options[view[3].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC3.appendChild(opt)
    }
    //for viewing answer 5
    viewBox4.classList.remove("hide");
    qN4.innerHTML="Qestion " + (5) + " of " + quiz.length;
    qT4.innerHTML=view[4].q;
   const optlen4 = view[4].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen4;i++)
    {
        availableOption.push(i)
    }
    oC4.innerHTML=''
    for(let i=0;i<optlen4;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[4].options[i];
        opt.id = i;
        opt.className = "opt";
        oC4.appendChild(opt)
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[4].options[view[4].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC4.appendChild(opt)
    }
     //for viewing answer 6
     viewBox5.classList.remove("hide");
     qN5.innerHTML="Qestion " + (6) + " of " + quiz.length;
     qT5.innerHTML=view[5].q;
    const optlen5 = view[5].options.length
     //push operationsinto availableOption array
     for(let i=0;i<optlen5;i++)
     {
         availableOption.push(i)
     }
     oC5.innerHTML=''
     for(let i=0;i<optlen5;i++){
         const opt = document.createElement("div");
         opt.innerHTML = view[5].options[i];
         opt.id = i;
         opt.className = "opt";
         oC5.appendChild(opt)
     }
     //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[5].options[view[5].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC5.appendChild(opt)
    }
      //for viewing answer 7
    viewBox6.classList.remove("hide");
    qN6.innerHTML="Qestion " + (7) + " of " + quiz.length;
    qT6.innerHTML=view[6].q;
   const optlen6 = view[6].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen6;i++)
    {
        availableOption.push(i)
    }
    oC6.innerHTML=''
    for(let i=0;i<optlen6;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[6].options[i];
        opt.id = i;
        opt.className = "opt";
        oC6.appendChild(opt)
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[6].options[view[6].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC6.appendChild(opt)
    }
    //for viewing answer 8
    viewBox7.classList.remove("hide");
    qN7.innerHTML="Qestion " + (8) + " of " + quiz.length;
    qT7.innerHTML=view[7].q;
   const optlen7 = view[7].options.length
    //push operationsinto availableOption array
    for(let i=0;i<optlen7;i++)
    {
        availableOption.push(i)
    }
    oC7.innerHTML=''
    for(let i=0;i<optlen7;i++){
        const opt = document.createElement("div");
        opt.innerHTML = view[7].options[i];
        opt.id = i;
        opt.className = "opt";
        oC7.appendChild(opt)
    }
    //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[7].options[view[7].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC7.appendChild(opt)
    }
     //for viewing answer 8
     viewBox8.classList.remove("hide");
     qN8.innerHTML="Qestion " + (9) + " of " + quiz.length;
     qT8.innerHTML=view[8].q;
    const optlen8 = view[8].options.length
     //push operationsinto availableOption array
     for(let i=0;i<optlen8;i++)
     {
         availableOption.push(i)
     }
     oC8.innerHTML=''
     for(let i=0;i<optlen8;i++){
         const opt = document.createElement("div");
         opt.innerHTML = view[8].options[i];
         opt.id = i;
         opt.className = "opt";
         oC8.appendChild(opt)
     }
     //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[8].options[view[8].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC8.appendChild(opt)
    }
     //for viewing answer 9
     viewBox9.classList.remove("hide");
     qN9.innerHTML="Qestion " + (10) + " of " + quiz.length;
     qT9.innerHTML=view[9].q;
    const optlen9 = view[9].options.length
     //push operationsinto availableOption array
     for(let i=0;i<optlen9;i++)
     {
         availableOption.push(i)
     }
     oC9.innerHTML=''
     for(let i=0;i<optlen9;i++){
         const opt = document.createElement("div");
         opt.innerHTML = view[8].options[i];
         opt.id = i;
         opt.className = "opt";
         oC9.appendChild(opt)
     }
     //to display correct answer in view page
    for(let i=0;i<1;i++){
        const opt = document.createElement("div");
        opt.innerHTML = "answer: " + view[9].options[view[9].answer];
        opt.id = i;
        opt.className = "opt1";
       
        oC9.appendChild(opt)
    }


    
  
}
    
 
function resetQuiz(){
      questionCounter=0;
     correctAnswer=0;
      attempt=0;

}
function TryAgain(){
    //hide the resultBox
    resultBox.classList.add("hide");
    //show the quizBox
    viewBox.classList.add("hide")
    viewBox1.classList.add("hide")
    viewBox2.classList.add("hide")
    viewBox3.classList.add("hide")
    viewBox4.classList.add("hide")
    viewBox5.classList.add("hide")
    viewBox6.classList.add("hide")
    viewBox7.classList.add("hide")
    viewBox8.classList.add("hide")
    viewBox9.classList.add("hide")
    quizBox.classList.remove("hide")
    resetQuiz();
    startQuiz();
}
function goTohome(){
    //hide result box
    resultBox.classList.add("hide");
    //show home box
    viewBox.classList.add("hide")
    viewBox1.classList.add("hide")
    viewBox2.classList.add("hide")
    viewBox3.classList.add("hide")
    viewBox4.classList.add("hide")
    viewBox5.classList.add("hide")
    viewBox6.classList.add("hide")
    viewBox7.classList.add("hide")
    viewBox8.classList.add("hide")
    viewBox9.classList.add("hide")
    homeBox.classList.remove("hide")
    resetQuiz();
}
function startQuiz(){
    //hide home box
    homeBox.classList.add("hide")
    //show quiz Box
    quizBox.classList.remove("hide")
    //first we will set all questions in availableQuestion Array
    setAvailableQuestions();
    //second we will call getNewQuestion();
    getNewQuestion();
}