#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


//Initializing balance and pin code
let myBalance = 10000;
let myPin =  1234;

//Print Welcome Message
console.log(chalk.blue("\n \tWelcome to Code With Malaika - ATM Machine\n \t"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
    
])
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\nPin is Correct,Login Successfully!\n"));
    // console.log(`Current Account Balance is ${myBalance}`)



let operationAns = await inquirer.prompt([
    {
        name:"Operations",
        type: "list",
        message: "Select an Operation: ",
        choices: ["Withdraw Amount", "Check Balance"]
    }

])

if (operationAns.Operations ==="Withdraw Amount"){
    let withdrawAns =await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message: "Select a withdrawal method:",
            choices: ["Fast Cash" , "Enter Amount"]
        }
    ])
    if(withdrawAns.withdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select Amount",
                choices: [2000 , 4000 , 6000 , 8000 , 10000]     
            }
        ])
        if(fastCashAns.fastCash > myBalance){
            console.log(chalk.red("Insufficient Balance;"));

        }
        else{
            myBalance -= fastCashAns.fastCash
            console.log(`${fastCashAns.fastCash} withdraw Successfully`);
            console.log(`Your Remaining Balance is ${myBalance}`);
        }

    }


    else if(withdrawAns.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
    
            }
        ])
        if(amountAns.amount > myBalance){
            console.log(chalk.red("Insufficient Balance"));
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }

    }


    
  

}
else if (operationAns.Operations === "Check Balance"){
    console.log(`Your Account Balance is: ${myBalance}`);
} 

}
else{
    console.log(chalk.red("Pin is Incorrect, Try Again!"))
}

   


 

