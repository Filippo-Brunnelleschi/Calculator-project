let firstNumber = null;
let secondNumber = 0;
let operator = "";
let tempNumber = 0;
let final = 0;


const buttons = document.querySelectorAll("button");
let dis = document.querySelector("h2");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let currentButton=e.target.textContent;
        currentButton =parseInt(currentButton);

        if (isNaN(currentButton))
        {
            OperatorCall(tempNumber, e.target.textContent);
            tempNumber=0;
        }
        else
        { 
            tempNumber = tempNumber*10 + currentButton;
            dis.textContent=tempNumber;
        }
    })
})


function OperatorCall(t,b)
{

    if (firstNumber===null)
    {
        firstNumber=t;
        console.log(firstNumber);
    }
    else
    {
        secondNumber=t;
        console.log(secondNumber);
    }

    if (b!="=")
    {
        operator=b;
    }
    else
    {
            switch (operator) {
            case "+": final =firstNumber+secondNumber;
            break ;
            case "-": final =firstNumber-secondNumber;
            break ;
            case "*": final =firstNumber*secondNumber;
            break ;
            case "/": final =firstNumber/secondNumber;
            break ;
            }
            dis.textContent=final;  
            Reset();
            
    }
}


function Reset () {
    firstNumber=final;
    secondNumber=null;
    operator=null;
    final=null;
}
