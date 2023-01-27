var brnleft = document.getElementById('btnleft')
var btnright = document.getElementById('btnright')
var item =document.getElementsByClassName('item')
var index = 0 
function removeClassActive(){
    for(var i = 0;i<item.length;i++){
        imten[i].className = 'item'
    }
}
btnleft.onclick = function(){
    if(index <= 0){
        index = 5;
    }
    index--
    goindex()
}
function goindex(){
    removeClassActive()
    item[index].className = 'item active'
}
btnright.onclick = function(){
    if(index >=4){
        index  = -1
    }
    index++
    goindex()
}
function goindex(){
    if(index >= 4){
        infex = -1 
    }
    else if(index<0){
        index = 4
    }
    index++
    goindex()
}