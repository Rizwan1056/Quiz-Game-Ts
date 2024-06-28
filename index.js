#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.blue("\n\t What are variables in typeScript \t\n"),
        choices: ["container to store multiple data", "container to store a single data", "none of these"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.blue("\n\t how many kinds of  variables in typeScript \t\n"),
        choices: ["4", "2", "3"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blue("\n\t Which type of data is write 3 in inverted commas\t\n"),
        choices: ["string", "boolean", "number"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.blue("\n\t What are arrays in typeScript \t\n"),
        choices: ["container to store multiple data", "container to store a single data", "none of these"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.blue("\n\t pop method is used for what purpose.....???? \t\n"),
        choices: ["remove last element from array", "add element in the start of an array", "replace element"]
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.blue("\n\t Math.random() is used for ????? \t\n"),
        choices: ["generate a random number", "addition", "generate a number from 1 to 10"]
    },
    {
        name: "question_7",
        type: "list",
        message: chalk.blue("\n\t inquirers are used for ???? \t\n"),
        choices: ["make array", "take input from a user", "make a file"]
    },
    {
        name: "question_8",
        type: "list",
        message: chalk.blue("\n\t tsc --init is used for make a file of ??? \t\n"),
        choices: ["typescript", "ts config", "javascript"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "container to store a single data":
        console.log(chalk.green("\n\tquestion number 1 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 1 is incorrect"));
}
switch (quiz.question_2) {
    case "2":
        console.log(chalk.green("\n\tquestion number 2 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 2 is incorrect"));
}
switch (quiz.question_3) {
    case "string":
        console.log(chalk.green("\n\tquestion number 3 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 3 is incorrect"));
}
switch (quiz.question_4) {
    case "container to store multiple data":
        console.log(chalk.green("\n\tquestion number 4 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 4 is incorrect"));
}
switch (quiz.question_5) {
    case "remove last element from array":
        console.log(chalk.green("\n\tquestion number 5 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 5 is incorrect"));
}
switch (quiz.question_6) {
    case "generate a random number":
        console.log(chalk.green("\n\tquestion number 6 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 6 is incorrect"));
}
switch (quiz.question_7) {
    case "take input from a user":
        console.log(chalk.green("\n\tquestion number 7 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 7 is incorrect"));
}
switch (quiz.question_8) {
    case "ts config":
        console.log(chalk.green("\n\tquestion number 8 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("question number 8 is incorrect"));
}
console.log(`Score : ${score}`);
