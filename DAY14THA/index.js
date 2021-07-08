

function myfunction(){
    return document.getElementById('s1').innerHTML= "Hello! how r u?";
}

function myfunction2(){
    return document.getElementById('s2').innerText="This is double click";
}

function myfunction3(){
    var x= document.getElementById("s3");
    x.value= x.value.toUpperCase();
}

function myInputFunction(){
    var x= document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML= "You wrtie: "+x;
}

var y= 0;
function myScrollfun(){
    document.getElementById("demo1").innerHTML= y+=1;
}


function mychange(){
    let z= document.getElementById("onchng").value;
    document.getElementById("demo2").innerHTML= "You selected: "+z;
}