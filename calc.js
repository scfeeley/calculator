function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    if(num2 === 0){
        return "No div by 0";
    }else{
        return num1 / num2;
    }
}
function operate(num1, opp, num2){
    if(opp === 'plus'){
        return add(num1, num2);
    }else if(opp === 'minus'){
        return subtract(num1, num2);
    }else if(opp === 'mult'){
        return multiply(num1, num2);
    }else if(opp === 'division'){
        return divide(num1, num2);
    }else{
        return 'error';
    }
}
let expectNum = false;
let displayVal = '';
let operation =[];

let disp = document.getElementById('disp');
disp.innerHTML = displayVal.slice(0,10);;

let nums = document.querySelectorAll('.nums');
nums.forEach((num)=>{
   num.addEventListener('click', () => {
        if(displayVal === "No div 0" ){
            displayVal = '';
            operation =[];
        }
        if(num.id === '.' && displayVal.includes('.')){

        }else if(!expectNum){
            displayVal = num.id;
            operation = [];
            expectNum = true;
            console.log(displayVal);
        }else{
            displayVal += num.id;
            console.log(displayVal);
        }
        disp.innerHTML = displayVal.slice(0,10);;
    });
}
);

const neg = document.getElementById('neg');
neg.addEventListener('click', () =>{
    if(displayVal === "No div by 0" ){
        displayVal = '';
        operation =[];
    }
    if(!expectNum){
        displayVal = '-';
        operation = [];
        expectNum = true;
    }else{
        if(!displayVal){
            displayVal ='-'
        }else{
            let currNum = parseFloat(displayVal) * -1;
            displayVal = currNum.toString();
        }
    }
    disp.innerHTML = displayVal.slice(0,10);;
});

const operators = document.querySelectorAll('.opps');
operators.forEach(opp =>{
    opp.addEventListener('click', (e) => {
        if(displayVal === "No div by 0" ){
            displayVal = '';
            operation =[];
        }
        if(operation.length === 2){
            operation.push(parseFloat(displayVal));
            console.log(operation);
            displayVal = operate(operation[0], operation[1], operation[2]);
            operation =[];
            operation.push(parseFloat(displayVal));
            operation.push(opp.id);
            console.log('hit opp b4 eq');
            console.log(operation);
        }else{
            operation.push(parseFloat(displayVal));
            operation.push(opp.id);
        }
        console.log('here');
        expectNum = true;
        console.log('hi');
        displayVal = '';
        console.log(operation)
        console.log(displayVal);
        disp.innerHTML = displayVal.slice(0,10);
    });
});

const eq = document.getElementById('eq');
eq.addEventListener('click', ()=>{
    if(displayVal === "No div by 0" ){
        displayVal = '';
        operation =[];
    }
    if(operation.length < 2){
        disp.innerHTML = displayVal;
        operation =[];
    }else{
        if(displayVal === ''){
            operation = [];
            displayVal = '';
            expectNum =false;
            disp.innerHTML='';
        }else{
            operation.push(parseFloat(displayVal));
            console.log(operation);
            console.log(displayVal);
            displayVal = operate(operation[0], operation[1], operation[2]).toString();
            operation =[];
            expectNum = false;
            disp.innerHTML = displayVal.slice(0,10);
        }
    }
})

const clear = document.getElementById('clear');
clear.addEventListener('click', ()=>{
    displayVal ='';
    operation =[];
    expectNum = false;
    disp.innerHTML = '';
})


//Bug 1+4/9 = 59
//1+ 4 /9 = 0.5555
