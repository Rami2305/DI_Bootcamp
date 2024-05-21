//Store a celsius temperature into a variable.
//Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
//Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
//Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const temperatureC = 20;
const temperatureF = ((temperatureC /5)*9 + 32)
console.log(temperatureF)


//For each expression, predict what you think the output will be in a comment (//) without first running the command.
//Of course, explain each prediction.
//Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) 
    //first expression
    // Prediction: 55. c its the addition of a +b
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23. we replace tha value of "a" for 2 and then we operate with addition
    // Actual:23
    //What is the value of c? C is not define, so we dont know C    
    //Analyse the code below, what will be the outcome? its a concatenation of 2 things, the addition of 3 + 4 and ´5´, as result we get 75. 
console.log(3 + 4 + '5');

//For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
//Of course, explain each prediction.
//Then run the expression in the console of your browser (NOT IN VS CODE).
//Note the actual output in a comment and compare it with your prediction.
//For example

//typeof("potato")
// Prediction: Vegetable
// Actual: String


//What is the output of each of the expressions below?


typeof(15)
// Prediction: number
// Actual:number

typeof(5.5)
// Prediction: number
// Actual:number

typeof(NaN)
// Prediction:message.
// Actual:number

typeof("hello")
// Prediction: string
// Actual:string

typeof(true)
// Prediction:message
// Actual: boolean

typeof(1 != 2)
// Prediction:
// Actual:

"hamburger" + "s"
// Prediction: concatenation
// Actual:concatenation

"hamburgers" - "s"
// Prediction: slice
// Actual:NaN

"1" + "3"
// Prediction: concatenation
// Actual:13

"1" - "3"
// Prediction:  
// Actual:

"johnny" + 5
// Prediction: addition
// Actual:johnny5

"johnny" - 5
// Prediction: NaN
// Actual:NaN

99 * "hello"
// Prediction: 
// Actual:NaN

1 != 1
// Prediction:
// Actual:False

1 == "1"
// Prediction:
// Actual:true

1 === "1"
// Prediction:
// Actual: False


//For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
//Of course, explain each prediction.
//Then run the expression in the console of your browser (NOT IN VS CODE).
//Note the actual output in a comment and compare it with your prediction.
//What is the output of each of the expressions below?


5 + "34"
// Prediction: 534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:number
// Actual:remainder

5 % 10
// Prediction:numer
// Actual: 5

" " + " "
// Prediction:concatenation
// Actual:"  "

" " + 0
// Prediction:concatenation
// Actual:" 0"

true + true
// Prediction:addition
// Actual:2

true + false
// Prediction:addition
// Actual:1

false + true
// Prediction:addition
// Actual:1

false - true
// Prediction:
// Actual: -1

!true
// Prediction:
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1
