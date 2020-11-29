#!/usr/bin/env node

const inquirer = require("inquirer");
const main = require("./index.js");

inquirer
  .prompt([
    {
      name: "text",
      type: "input",
      prefix: "",
      message: "Enter Your Input (Binary or Text)",
    },
  ])
  .then((answers) => {
    // First check if string is binary number
    switch (/^[01][01\s]*[01]$/.test(answers.text)) {
      case true:
        console.log(main.decode(answers.text));
        break;
      case false:
        console.log(main.encode(answers.text));
        break;
    }
  })
  .catch((error) => {
    error = error.toString();

    if (error.isTtyError) {
      throw new Error("TTY Error happened");
    } else if (error.includes("No")) {
      console.error("! No string provided !");
    } else {
      throw new Error(error);
    }
  });
