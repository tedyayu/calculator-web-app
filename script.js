let result=0;
let theoperator='';
let step=1;
let firstArray=[];
let firstNumber=0;
let secondNumber=0;
let secondArray=[];
let num=0;

let display=document.querySelector('.display');
display.value=o;
function addition(firstNumber,secondNumber){
    result=firstNumber+secondNumber;
    return result;

}

function subtraction(firstNumber,secondNumber){
    result=firstNumber-secondNumber;
    return result;
}
function multiplication(firstNumber,secondNumber){
    result=firstNumber*secondNumber;
    return result;
}
function dividing(firstNumber,secondNumber){
    result=firstNumber/secondNumber;
    return result;
}
function getNumber(num){
    
    if(step==1){
        firstArray.push(num);
        firstNumber=Number(firstArray.join(''))
        display.value=firstNumber;
    }
    else if(step==2){
        secondArray.push(num);
        secondNumber=Number(secondArray.join(''))
        
        display.value=secondNumber;
    }
    
}
function getOperator(operator){
    theoperator=operator;
    step=2;
}

function clearDisplay(){
    display.value=0;
    firstNumber=0;
    secondNumber=0;
    result=0;
    step=1;
    theoperator=0;
    firstArray=[];
    secondArray=[];
}

function calculate(){
    if (theoperator=='+'){
        addition(firstNumber,secondNumber);
        
    }
    else if(theoperator=='-'){
        subtraction(firstNumber,secondNumber);
        
    }
    else if(theoperator=='*'){
        multiplication(firstNumber,secondNumber);
  
    }
    else if(theoperator=='/'){
        dividing(firstNumber,secondNumber);
     
    }
    firstNumber=result;
    display.value=firstNumber;
    secondArray=[];
    
}
