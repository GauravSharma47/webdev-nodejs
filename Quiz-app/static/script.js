const quizData=[
  {
    question:'Which is the best programming language as per 2020?',
    a:'Python',
    b:'Javascript',
    c:'C++',
    d:'C',
    correct:'b'
  },
  {
    question:'What is full form of OOP?',
    a:'Object oriented programming',
    b:'Other objects program',
    c:'Other objects programming',
    d:'Object operator programming',
    correct:'a'
  },
  {
    question:'Entomology is the science that studies',
    a:'Behavior of human beings',
    b:'Insects',
    c:'The origin and history of technical and scientific terms',
    d:'The formation of rocks',
    correct:'b'
  },
  {
    question:'Garampani sanctuary is located at',
    a:'Junagarh, Gujarat',
    b:'Diphu, Assam',
    c:'Kohima, Nagaland',
    d:'Gangtok, Sikkim',
    correct:'b'
  },
  {
    question:'For which of the following disciplines is Nobel Prize awarded?',
    a:'Physics and Chemistry',
    b:'Physiology or Medicine',
    c:'Literature, Peace and Economics',
    d:'All of the above',
    correct:'d'
  },
  {
    question:'Hitler party which came into power in 1933 is known as',
    a:'Labour Party',
    b:'Nazi Party',
    c:'Ku-Klux-Klan',
    d:'Democratic Party',
    correct:'b'
  }
  ];


var i=0;
const ques=document.getElementById("question");
const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const sumbit=document.getElementById("submit");
const answer = document.getElementsByName('option');

ques.innerHTML=quizData[0].question;
a.innerHTML=quizData[0].a;
b.innerHTML=quizData[0].b;
c.innerHTML=quizData[0].c;
d.innerHTML=quizData[0].d;

function nextQuestion(){
  checkAnswer();
  if (i<quizData.length-1) {
    i=i+1;
  }
  else {
    alert("Quiz ended");
    window.location.reload();
  }
  ques.innerHTML=quizData[i].question;
  a.innerHTML=quizData[i].a;
  b.innerHTML=quizData[i].b;
  c.innerHTML=quizData[i].c;
  d.innerHTML=quizData[i].d;

}

function checkAnswer(){
  for(j = 0; j < answer.length; j++)
  {
      if (answer[j].checked) {
          if (answer[j].value == quizData[i].correct){
            console.log("Correct");
          }
          else {
            console.log("incorrect");
          }
        }
      }

}

submit.addEventListener("click",nextQuestion);
