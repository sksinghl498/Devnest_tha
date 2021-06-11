function go1(x){
   return x.join(",");
}

function go2(x){
   return x.join("+");
}

console.log(go1(["Red", "Green", "White", "Black"]));
console.log('"'+go1(["Red", "Green", "White", "Black"])+'"');
console.log('"'+go2(["Red", "Green", "White", "Black"])+'"');