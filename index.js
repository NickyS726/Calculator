var outputDiv = document.getElementById("output");

var num1 = 0;
var num2 = 0;
var onNum = 1;
var operation;
var answer;

outputDiv.innerText = "";

function addSymbol(num) {
    onNum = 2;
    outputDiv.innerText = outputDiv.innerText + num;
    if(num=='+')
    {
        operation=1;
    }
    if(num=='-')
    {
        operation=2;
    }
    if(num=='×')
    {
        operation=3;
    }
    if(num=='÷')
    {
        operation=4;
    }
    
}
function clearText() {
    outputDiv.innerText = "";
}

function calculation () {
    outputDiv.innerText = answer ;
    if(operation==1)
    {
        answer= parseInt(num1)+ parseInt(num2);
    }
}
function addNum(num) {
    outputDiv.innerText = outputDiv.innerText + num;
    if(onNum==1)
    {
        num1=num1+""+num
    }
    if(onNum==2)
    {
        num2=num2+""+num
    }
    
}