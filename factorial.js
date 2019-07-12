//looping function for factorial
let factorial = (num)=>{
    var result=1;
    let count;
    for(count=num; count>1; count--){
        result*=count;
    }
    
return result;

};
console.log(factorial(3));


let factorial2 = function fac(num){

    if(num === 0 || num === 1){
        return 1;
    }
    return num * fac(num-1);

}
console.log(factorial2(4));

//factorial
function myFactor(num2){
    if(num2 === 0 || num2 ===1){
        return 1;
    }
    return num2 * myFactor(num2-1);
}
console.log(myFactor(5));