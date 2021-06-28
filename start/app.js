const main =document.querySelector("#main");
const qna =document.querySelector("#qna");
const result =document.querySelector("#result");

const endpoint = 12;
const select= [0,0,0,0,0,0,0,0,0,0,0,0,0];

function calResult(){ 
    var result = select.indexOf(Math.max(...select));
    return result;
}
function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;
  
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
  
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

}

function addAnswer(Text, num,i){
    var A = document.querySelector('.answer');
    var addBTN = document.createElement('button');
    addBTN.classList.add("answerList");
    A.appendChild(addBTN);
    addBTN.innerHTML = Text;

    addBTN.addEventListener("click", function(){
        var children =  document.querySelectorAll('.answerList');
        for( let i=0; i<children.length; i++){
            children[i].style.display = true;
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout( () => {
            var target = qnaList[num].a[i].type;
            for(let j = 0; j< target.length; j++ ){
                select[target[j]] ++;
            }
            for(let j =0; j < children.length; j++){
                children[j].style.display = 'none';
            }
            goNext(++num);
        },450);
    },false);
}


function goResult(){
     
    qna.style.animation = "fadeOut 1s";
    setTimeout( ()=> {
        qna.style.animation = "fadeIn 1s";
        setTimeout( ()=> {
            
            qna.style.display = "none" ;
            result.style.display = "flex";
        },200);
    })
    setResult();

}

function goNext(num){
    if(num == endpoint){
     goResult();
     return;
    }    

    var Q = document.querySelector('.qustion');
    Q.innerHTML = qnaList[num].q;

    for(let i in qnaList[num].a){
        addAnswer(qnaList[num].a[i].answer,num, i);
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


