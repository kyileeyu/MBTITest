const main =document.querySelector("#main");
const qna =document.querySelector("#qna");
const result =document.querySelector("#result");

const endpoint = 12;
const select = [];

function addAnswer(Text, num){
    var A = document.querySelector('.answer');
    var addBTN = document.createElement('button');
    addBTN.classList.add("answerList");
    A.appendChild(addBTN);
    addBTN.innerHTML = Text;

addBTN.addEventListener("click", function(){
    var children =  document.querySelectorAll('.answerList');
    for( let i=0; i<children.length; i++){
        children[i].style.display = 'none';
    }
    goNext(++num);
})
}
function goResult(){
     
}

function goNext(num){
    if(num == endpoint) goResult();
    var Q = document.querySelector('.qustion');
    Q.innerHTML = qnaList[num].q;

    for(let i in qnaList[num].a){
        addAnswer(qnaList[num].a[i].answer, num);
    }

    var pgBar = document.querySelector('.progressBar');
    pgBar.style.width = (100/endpoint) * (num+1) +'%';

}

function begin(){

    main.style.animation = "fadeOut 1s";
    setTimeout( ()=> {
        qna.style.animation = "fadeIn 1s";
        setTimeout( ()=> {
            
            main.style.display = "none" ;
            qna.style.display = "flex";
        },200);
        let num = 0;
        goNext(num);
    },200);
}

function checkResult(){
    qna.style.display = "none";
    result.style.display = "block";
}


