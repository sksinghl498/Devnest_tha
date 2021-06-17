
var rows='<tr>';

for(let i=1;i<=20;i++){
    rows+='<td></td>';
}
rows+='</tr>';
var square='';
for(i=1;i<=20;i++){
    square+=rows;
}
 document.getElementById("creature").innerHTML =square;
document.querySelectorAll('td').forEach((i)=>{
    i.addEventListener('click',function(){
        i.classList.toggle("chngcl");
    })
})