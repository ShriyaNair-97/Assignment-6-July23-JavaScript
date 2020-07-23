console.log('---------------------------------------------------------------')
console.log('The first question of the assignment')
var jeff=15
var todd=16
function myBMI(x,y){ 
    return [x/(y*y)]*100
}


console.log('---------value of BMI--------------')
let a= myBMI(53,jeff)
let b=myBMI(56,todd)

console.log(`The BMI of JEFF is ${[a]} and the BMI of TODD is ${[b]}`)

console.log('---------who has greater BMI--------------')
if(a>b){
    console.log("Jeff has greater BMI than Todd's and the boolean value is"+Boolean(a>b))
}
else{
    console.log("Todd has greater BMI than Jeff's and the boolean value is"+Boolean(b>a))  
}