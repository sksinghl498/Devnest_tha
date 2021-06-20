
var sel=document.querySelectorAll(".seat");


var booked=0;
var vacant=16;
document.getElementById('show1').innerHTML=booked;
document.getElementById('show2').innerHTML=vacant;


sel.forEach((i)=>{
    i.addEventListener('click',()=>{
        if(i.classList.contains("seat")){
            console.log("bro book hai yrr");
            i.classList="seatv";
            if(booked<16)
               { booked++;}
            if(vacant>0){
            vacant--;}
            document.getElementById('show1').innerHTML=booked;
            document.getElementById('show2').innerHTML=vacant;
            console.log(i.classList);
        }
        else{
            // console.log("na beta tumse na ho payega!");
            i.classList="seat";
            console.log(i.classList);
            if(booked>0){
            booked--;}
            if(vacant<16){
            vacant++;}
            document.getElementById('show1').innerHTML=booked;
            document.getElementById('show2').innerHTML=vacant;
        }
    })
})
