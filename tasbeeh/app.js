let text=document.getElementById('span')
count=0;
function Inc(){

    count++;
    text.innerText=count;
}
function Dec(){
    if(count==0){
        count=0;
    }
    else{
        count--;
    }

    
    text.innerText=count;
}
function Reset(){

    count=0;
    text.innerText=count;
}