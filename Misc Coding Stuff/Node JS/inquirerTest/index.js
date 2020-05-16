const inquirer = require('inquirer');
inquirer
  .prompt([
    {
        name: 'faveReptile',
        message: 'What is your favorite reptile?',
      },
      {
        name: 'faveColor',
        message: 'What is your favorite color?',
      },
      {
        name: 'faveHeight',
        message: 'How tall are you?',
      },
      
  ])
  .then(answers => {
    console.info('Answer:', answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });