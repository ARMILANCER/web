var valChange = document.getElementById("value_change");
var valBase = document.getElementById("value_base");
var textA_base = document.getElementById("textA_base");
var textA_change = document.getElementById("textA_change");

textA_base.addEventListener("input",function(){
    eventBase();
});
textA_change.addEventListener("input",function(){
    eventChange();
});

valBase.addEventListener("change",function(){
    eventChange();
});
valChange.addEventListener("change",function(){
    eventBase();
});

function eventBase(){
    // console.log(valBase.value);
    // console.log(importo(valChange.value, parseFloat(textA_base.value)));
    textA_base.value = textA_base.value.replace(/[^\d.]/g, '');
    //textA_change.value = importo(valChange.value, valBase.value,parseFloat(textA_base.value));
    textA_change.value = importo(valBase.value,parseFloat(textA_base.value));
}

function eventChange(){
     // console.log(valChange.value);
    // console.log(importo(valBase.value, parseFloat(textA_change.value)));
    textA_change.value = textA_change.value.replace(/[^\d.]/g, '');
    //textA_base.value = importo(valBase.value, valChange.value, parseFloat(textA_change.value));
    textA_base.value = importo(valChange.value, parseFloat(textA_change.value));
}
// function importo(change, base, importo){
function importo(base, importo){
    // tasso intermedio
    //let res = (change/base) * importo;
    let res = importo * base;
    if(/[0-9]/.test(res)){
        if(!Number.isInteger(res)){
            return res.toFixed(4);
        }else{
            return res;
        }
    }
    return "";
};

