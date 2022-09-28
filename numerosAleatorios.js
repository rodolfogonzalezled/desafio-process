// process.on('message', cant => {
//  console.log(cant)
//     // let random = Math.random();
//     // random = random * 1000 + 1;

//     // process.send(cant)
// })

process.on('message',message=>{
    let sum = 0;
    for(let i=0;i<message;i++){
        sum+=i
    }
    process.send(sum)
})
