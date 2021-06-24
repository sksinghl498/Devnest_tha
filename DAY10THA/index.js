
// main java script file for game board 
const val = document.querySelectorAll('.card');
let eventoccur= false;
let fc, sc;
let wait= false;


let sc1= document.getElementById("show1");
let sc2=document.getElementById("show2");
var wa=0;
var acc=0;
sc1.innerHTML=0;
sc2.innerHTML=0;
function flipcard(){
    if(wait) return;
    if(this===fc) return;
    this.classList.add('flip');
    // this.classList.toggle('flip');

    if(eventoccur===false){
        eventoccur= true;
        fc=this;
        return;
    }
    sc= this;
    // eventoccur=false;
    checkmatch();
}

function checkmatch(){

    if(fc.dataset.cartoon===sc.dataset.cartoon){
        disabledcards();
        return;
    }
    unflipcards();
}

function disabledcards(){
    acc++;
    sc2.innerHTML=acc;
    fc.removeEventListener('click',flipcard);
    sc.removeEventListener('click',flipcard);
    resetcard();
}

function unflipcards() {
    wait=true;
    setTimeout(()=>{
        fc.classList.remove('flip');
        sc.classList.remove('flip');
        wait=false;
        resetcard();
        wa++;
        sc1.innerHTML=wa;
    },1500);
}
function resetcard(){
    [eventoccur,wait]=[false,false];
    [fc,sc]=[null,null];
}

(function shuffle(){
    val.forEach(i=> {
        let randompos= Math.floor(Math.random()*16);
        i.style.order=randompos;
    });
})();
val.forEach((i)=> i.addEventListener('click',flipcard));