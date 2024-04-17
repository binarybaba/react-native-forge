#!/usr/bin/env node

import { prompt } from "enquirer";

async function main() {
  const name: {username: string} = await prompt({
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  });
  console.log({name})
}

main();
