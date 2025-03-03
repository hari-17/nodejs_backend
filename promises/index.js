function divide(num1, num2)
{
    return new Promise((resolve,reject)=>
    {
        if(num2 == 0)
            reject("num2 cannot be 0")
        else{
            resolve(num1/num2)
        }
    })
}

divide(4,0).then((res)=>console.log(res)).catch((err)=> console.log(err));