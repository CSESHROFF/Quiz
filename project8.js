const questions =[
    {
        'que': 'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'js',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'How many sizes of headers are available in HTML by default?',
        'a':'2',
        'b':'1',
        'c':'5',
        'd':'6',
        'correct':'d'
    },
    {
        'que': 'What is the smallest header in HTML by default?',
        'a':'H1',
        'b':'H2',
        'c':'H6',
        'd':'H5',
        'correct':'c'
    },
    {
        'que': 'How to create an ordered list in HTML?',
        'a':'ul',
        'b':'ol',
        'c':'<b>',
        'd':'<h1>',
        'correct':'b'
    },
    {
        'que': 'HTML files are saved by default with the extension?',
        'a':'.html',
        'b':'.css',
        'c':'.js',
        'd':'.php',
        'correct':'a',
    }
]

let index = 0;
let total = questions.length;
let right=0,
wrong=0;

const quesBox = document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestions = () =>{
    if(index === total){
        return endQuiz()
    }
    reset();

    const data=questions[index]
    // console.log(data)
    quesBox.innerText=`${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data = questions[index];
    const ans =getAnswer()
    if (ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false
        }
    )
}


const endQuiz=()=>{
    document.getElementById("box").innerHTML=
    `<h3>Thanks you for playing th quizs!.</h3>
    <h2>${right}/${total} are correct </h2>`
}

loadQuestions();