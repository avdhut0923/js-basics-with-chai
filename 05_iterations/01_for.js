for(let i= 0 ;i<10;i++){
    if(i==5)console.log("jai shree ram");
    // console.log(i)
}

// for(let i=1;i<=10;i++){
//     // console.log(`outer loop value ${i}`)
//     for(let j = 1;j<=10;j++)
//     // console.log(`Inner loop value is ${j}`);
//     // console.log(i + `*`+j + ` = `+i*j);
// }

let arr = ["mauli","Ram","Krishna","Hari"]
console.log(arr.length);
// console.log(arr.size());//size works only with vector
for(let i=0;i<arr.length;i++){
    if(i==2){console.log("bolo radhe radhe")
        continue;
    }
    console.log(arr[i]);
}