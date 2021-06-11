function go(arr,n){

    arr.sort();

    let max_cnt=1, res=arr[0];

    let curr_cnt=1;
    for(let i=1;i<n;i++){
        if(arr[i]==arr[i-1])
           curr_cnt++;
        else{
            if(curr_cnt>max_cnt){
                max_cnt=curr_cnt;
                res=arr[i-1];
            }
            curr_cnt=1;
        }
    }

    if(curr_cnt> max_cnt){
        max_cnt=curr_cnt;
        res=arr[n-1];
    }
    return res;
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let n= arr1.length;
console.log(go(arr1,n));