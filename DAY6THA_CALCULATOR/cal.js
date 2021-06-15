let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(let i of buttons){
    i.addEventListener('click',(e)=>{
        var text= e.target.innerText;
        console.log('Button text is',text);

        if(text=='X'){
            text='*';
            screenValue+=text;
            screen.value=screenValue;
        }
        else if(text=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(text=='='){
            screen.value= eval(screenValue);
        }
        else if(text=='π'){
            screenValue+= 3.14;
            screen.value=screenValue;
        }
        else if(text=='√'){
            screenValue=Math.sqrt(screenValue);
            screen.value=screenValue;
        }
        else if(text=='del'){
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }
        else if(text=='e'){
            screen.value+=2.718;
        }
        else{
            screenValue+=text;
            screen.value=screenValue;
        }
    })
}