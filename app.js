const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
  
// const fs = require('fs');
// const generatePage = require('./src');
//...
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

// const pageHTML = generatePage(portfolioData);
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${cinful79}</h1>
    <h2><a href="https://github.com/${cinful79}">Github</a></h2>
  </body>
  </html>
  ;
};

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });