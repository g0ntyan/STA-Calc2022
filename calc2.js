let mark = "+";
let Result ="";
let currentResult = "";
let flag = 0;

const screen = document.getElementById("display");

const inputValue = data =>{
    flag = 0;
    currentResult += data;
    display.textContent = currentResult;
};

const Calc = data =>{
    if(flag === 0 && data !== "="){
    flag = 1;
    Result = eval(Resalt + mark + currentResult);    
    mark = data;
    currentResult = "";
    display.textContent = result;
    }else if (flag === 1 &&  flag === 1){  
    currentResult = eval(currentResult/100);
    currentResult = "";
    display.textContent = currentResult;
    } else if (data === "=") {
    flag = 1;
    Result = eval(total + mark + currentResult);
    
    currentResult = "";
    display.textContent = Result
    }
    else {
    mark = data;
    }
};
 
const inputDot = data =>{
    if(!currentResult.includes(".")){
        currentResult += data;
        display.textContent = currentResult;
    }
};