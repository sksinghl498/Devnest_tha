const questionBank =[
    {
        question: "Who is the vice president of India ?",
        option: ["M.Venkaiah Naidu","Ramesh Pokhriyal","Ram Nath Kovind","Pranab Mukherjee"],
        answer: "M.Venkaiah Naidu"
    },
    {
        question: "Who Invented the Bitcoin ?",
        option: ["Warren Buffett","Elon Musk","Satoshi Nakamoto","Bill Gates"],
        answer: "Satoshi Nakamoto"
    },
    {
        question: "How many time zones are there in Russia?",
        option: ["5","11","8","9"],
        answer: "11"
    },
    {
        question: "In what year was the first iPhone released?",
        option: ["2004","2005","2006","2007"],
        answer: "2007"
    },
    {
        question: "Batch Leader of 8Bit_coders Team?",
        option: ["Drills ","Harshita","Manav","Spock"],
        answer: "Harshita"
    },
    {
        question: "India's Number of college?",
        option: ["IIIT Hyderabad","IIT Bombay","IIT Ghaziabad","MNNIT"],
        answer: "IIT Ghaziabad"
    }
]

const question= document.getElementById('question');
var container = document.getElementById('container');
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");

var next = document.querySelector('.next');
var span = document.querySelectorAll('span');

var points = document.getElementById('score');
var scoreboard = document.getElementById('scoreboard');
var i=0;
var score=0;
function displayquestion(){
    scoreboard.display= 'none';
    for(var q=0;q<span.length;q++){
        span[q].style.background= 'none';
    }

    question.innerHTML = "Q."+(i+1)+' '+questionBank[i].question;
    opt1.innerHTML =questionBank[i].option[0];
    opt2.innerHTML= questionBank[i].option[1];
    opt3.innerHTML= questionBank[i].option[2];
    opt4.innerHTML= questionBank[i].option[3];
}

function calcscore(e){
    if(e.innerHTML==questionBank[i].answer && score<questionBank.length){
        score=score+1;
        document.getElementById(e.id).style.background='#0f9b0f';
    }
    else{
        document.getElementById(e.id).style.background='#DC281E';
    }
    setTimeout(nextquestion,500);
}

function nextquestion(){
    if(i<questionBank.length-1){
        i=i+1;
        displayquestion();
    }
    else{
        points.innerHTML= score+'/'+questionBank.length;
        container.style.display= 'none';
        scoreboard.style.display= 'block';
        // console.log(points.innerText);
    }
    points.innerHTML= score;
}


next.addEventListener('click',nextquestion);

function back(){
    location.reload();
}

displayquestion();

