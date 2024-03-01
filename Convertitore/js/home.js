console.log("yes");
let valChange = document.getElementById("value_change");
let valBase = document.getElementById("value_base");
let textA_base = document.getElementById("textA_base");
let textA_Change = document.getElementById("textA_change");

textA_base.addEventListener("input",function(){
    console.log(valBase.value);
    console.log(importo(valChange.value, parseFloat(textA_base.value)));
    textA_Change.value = importo(valChange.value, parseFloat(textA_base.value));
});

textA_Change.addEventListener("input",function(){
    console.log(valChange.value);
    console.log(importo(valBase.value, parseFloat(textA_Change.value)));
    textA_base.value = importo(valBase.value, parseFloat(textA_Change.value));
});
function importo(value, importo){ 
    let res = value * importo
    if(/[0-9]/.test(res)){
        if(!Number.isInteger(res)){
            return (value * importo).toFixed(3);
        }
        return value * importo;
    }
    return "";
};
