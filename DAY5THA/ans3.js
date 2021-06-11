function first(x,n){
    if(n>0){
       return  x.slice(0,n);
    }
    else if(n==0){
        return x[0];
    }
    else{
        return x.slice(0,0);
    }
}
console.log(first([7, 9, 0, -2],1));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
