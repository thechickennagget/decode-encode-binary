#!/usr/bin/env node

import inquirer from 'inquirer';
import { encode, decode } from './index.js';

inquirer
  .prompt([
    {
      name: 'text',
      type: 'input',
      prefix: '',
      message: 'Enter your input (Binary/Text)',
    },
  ])
  .then((input) => {
    // First check if string is a binary
    switch (/^[01][01\s]*[01]$/.test(input.text)) {
      case true:
        process.stdout.write(`${decode(input.text)}\n`);
        break;
      case false:
        process.stdout.write(`${encode(input.text)}\n`);
        break;
      default:
        throw new Error('Unknown String');
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw new Error('TTY error');
    } else {
      throw new Error(error);
    }
  });
