// Events for button
myfunc= ()=>{
    document.getElementById("demo").innerHTML="How are u?";
}

// events for div

var cell = document.querySelector("div");

cell.addEventListener("click",()=>{
    if(cell.classList.contains("box")){
        cell.classList= "box1";
    }
    else{
        cell.classList="box";
    }
})