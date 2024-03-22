function homeStart(){
    recall(1)
}
function recall(value){
    let dl_css = document.getElementById("DL_css");
    let ds_js = document.getElementById("DS_js");
    dl_css.setAttribute("href","../css/test_type"+value+".css");
    ds_js.setAttribute("src","../js/test_type"+value+".js");
}