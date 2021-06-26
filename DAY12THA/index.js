const inval = document.getElementById('val');
const btn = document.getElementById('submit');
const tdl = document.getElementById('todos'); 

btn.addEventListener('click', ()=>{
    let ele = document.createElement('li');
    let del = document.createElement("span");
    ele.appendChild(del);
    // ele.innerHTML= inval.value;
    tdl.appendChild(ele);
    inval.value="";
    console.log(ele);
})

