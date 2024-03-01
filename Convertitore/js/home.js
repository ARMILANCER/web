var valChange = document.getElementById("value_change");
var valBase = document.getElementById("value_base");
var textA_base = document.getElementById("textA_base");
var textA_change = document.getElementById("textA_change");

textA_base.addEventListener("input",function(){
    // console.log(valBase.value);
    // console.log(importo(valChange.value, parseFloat(textA_base.value)));
    this.value = this.value.replace(/[^\d.]/g, '');
    textA_change.value = importo(valChange.value, parseFloat(textA_base.value));
});
textA_change.addEventListener("input",function(){
    // console.log(valChange.value);
    // console.log(importo(valBase.value, parseFloat(textA_change.value)));
    this.value = this.value.replace(/[^\d.]/g, '');
    textA_base.value = importo(valBase.value, parseFloat(textA_change.value));
});
function importo(value, importo){
    let res = value * importo
    if(/[0-9]/.test(res)){
        if(!Number.isInteger(res)){
            return (value * importo).toFixed(4);
        }
        return value * importo;
    }
    return "";
};
