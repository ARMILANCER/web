//var ID_QT1 = 0; 
question();
range();
////
// create request type 1
////
// question
function question(){
    let div = document.getElementById("QT1");
    let question = document.createElement("p");
    question.setAttribute("class","request");
    question.textContent = "Dormi bene la notte?";
    div.appendChild(question);
}
// range
function range(){
    let range;
    let choice;
    let div = document.getElementById("choice");
    div.addEventListener("change",function(event){
        let choice= event.target.value;
        console.log(choice);
    });
    // TODO: import database array
    let ladder = ["Niente","Un po","Neutro","Abbastanza","Molto"];
    for(i=0;i<5;i++){
        range =  document.createElement("input");
        range.setAttribute("type","radio");
        range.setAttribute("name","choice");
        range.setAttribute("class","radio");
        range.setAttribute("title",ladder[i]);
        range.setAttribute("value",i);
        div.appendChild(range);
    }
}
