/******* REST AND SPREAD OPERATOR ******* */
// const originalAnimalArr = ['Dog', 'Cat', 'Horse'];
// right below is the SPREAD****
// const workingAnimalArr = [...originalAnimalArr];// copies over but doesn't affect the original
// workingAnimalArr.push('Bird');

// console.log(workingAnimalArr);//logs ['dog', 'cat', 'horse', 'bird']
// console.log(originalAnimalArr); //logs ['dog', 'cat', 'horse']

//below demonstrates REST
// const finishOrder = [
//     'Speed Racer',
//     'Flash Marker Jr.',
//     'Racer X',
//     'Snake Oiler',
//     'Trixie',
//     'Grey Ghost',
//     'Taejo Togokhan'
//   ];
  
//   const [first, ...theRest ] = finishOrder;
  
//   console.log(finishOrder);// logs the array above
  
//   console.log(theRest);  //logs everything but the first,
    //since we created a new array with the rest operator containing 
    // everything after the first index of finishOrder


/************* BELOW DEMONSTRATES .filter() ********* */
// const ageArr = [21, 58, 8, 16, 106, 83, 42, 2, 0];

// const over21Arr = ageArr.filter(age => {
//   if (age >= 21) {
//     return true;
//   } else {
//     return false;
//   }
// });
// // => [21, 58, 106, 83, 42];

// console.log(ageArr); //prints [21, 58, 8, 16, 106, 83, 42, 2, 0]

// console.log(over21Arr); //prints [21, 58, 106, 83, 42]


//below demonstrates .map()***********************

// const animalArr = ['Dogs', 'Cats', 'Horses', 'Birds'];

// const coolAnimalArr = animalArr.map(animal => {
//   console.log(animal);
//   return console.log(`${animal} are really cool animals.`);
// });
//on each index will perform some function
//this console.logs
// "Dogs"
// "Dogs are really cool animals."
// "Cats"
// "Cats are really cool animals."
// "Horses"
// "Horses are really cool animals."
// "Birds"
// "Birds are really cool animals."

//const commandLineArgs = process.argv;

//console.log(commandLineArgs);

// //allowed to manipulate whats inside an array or object for const
// // but can't reassign a 'const' with a new value
// //  'let' is used for this reassigning
// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// console.log(animalArray);
// //we are just referencing the container of the content inside the object
// // not referencing the content itself. 
// const personObj = {
//     name: 'Anders',
//     age: 99
// };

// //can manipulate contents inside a const object
// personObj.age = 28;
// personObj.occupation = 'Developer';

// console.log(personObj);

//using function expression syntax
// const addNums = function(numOne, numTwo){
//     return numOne + numTwo;
// }

//arrow function syntax
// const addNums = (numOne, numTwo) => return numOne + numTwo;
// 
//
// if only one parameter in the arrow function can remove parenthesis
// no curly braces means implicit return value of the function
// const doubler = num => num * 2;
// console.log(doubler(2));


//const printProfileData = profileDataArr =>/*console.log(profileDataArr);*///semicolon for declaring function expression
//same as writing this below, and the function above just has an implicit return of the function value and outputs to console.

//  const printProfileData = (profileDataArr) => {
    //print the array itself
    //      console.log(profileDataArr);  
    //  };
    




        /* EXAMPLES SHOWING THE SCOPING OF VAR AND LET VARIABLES */
        /******************************************************** */
    // // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:
    
    // var one = 'one: declared outside the block';
    
    // if (true === true) {
    //   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
    //   console.log(one); // prints 'one: declared inside the block'
    // }
    
    // console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.
    
    // // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:
    
    // let two = 'two: declared outside the block';
    
    // if (true === true) {
    //   let two = 'two: declared inside the block';
    //   console.log(two); // prints 'two: declared inside the block'
    // }
    
    // console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.
    
    // // var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:
    
    // var three = 'three: declared outside the block';
    
    // if (true === true) {
    //   three = 'three: changed inside the block'; // notice: we don't redeclare
    //   console.log(three); // prints 'three: changed inside the block'
    // }
    
    // console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.
    
    // // let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:
    
    // let four = 'four: outside the block';
    
    // if (true === true) {
    //   four = 'four: inside the block'; // notice: we don't redeclare the variable
    //   console.log(four); // prints 'four: inside the block'
    // }
    
    // console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.


    




    
    
    
    
//slicing the first two arguments in the process object off as
//  to not display them in the console when logging the process.argv's 
//const profileDataArgs = process.argv.slice(2, process.argv.length);

// console.log("logging just the array of arguments we want");
// console.log(profileDataArgs);

// //more than one line will need curly brackets
// console.log("logging the for loop of each item in the data array no functions used against the items in the array")
// const printProfileData1 = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         //print the content inside the array
//         console.log(profileDataArr[i]);
//     }
// };

// printProfileData1(profileDataArgs);

// /*** EXPLAINING FOREACH LOOP ********** */

// console.log("===================");
// console.log("logging the forEach loop, for each item in the data array do a function")
// const printProfileData2 = profileDataArr => {
//     console.log(profileDataArr);
//     profileDataArr.forEach(profileItem => {
//         console.log(profileItem);
//     });
// };


// printProfileData2(profileDataArgs);



//arguments into a function using template literals
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Anders', "dj-viking"));


//multi line strings using return ` (backtick) 


//declaring const name is type: never
//  i think name is part of a namespace of another global object within the runtime engine?


// const firstName = profileDataArgs[0];
// const github = profileDataArgs[1];

//or we can do assignment destructuring


// const name; 
//  name + userName; 

//require the file system inside built in node js modules
// const fs = require('fs');



// const generatePage = require('./page-template.js');


//ES6 version of require fs???


//const profileDataArgs = process.argv.slice(2, process.argv.length);
//const [firstName, github] = profileDataArgs;


// fs.writeFile('index.html', generatePage(firstName,github), err =>{
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// })

//IF THIS DOES NOT WORK AT OPENING FOR SOME REASON IF MODULES ARE NOT THERE
//TYPE npm install TO INSTALL ALL DEPENCIES REQUIRED TO RUN app.js


const inquirer = require('inquirer');
//const fs = require('fs');
//no longer putting require fs here because we are requiring it
//  in our generate-site.js file already

const generateSite = require('./utils/generate-site.js');


// const { AnimationFrameScheduler } = require('rxjs/internal/scheduler/AnimationFrameScheduler');
// console.log(inquirer);

//assign the anonymous function inside page-template.js to a variable
const generatePage = require('./page-template.js');

const promptUser = () => {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');   
                    return false;
                }
            }
        },
        {//ask if user wants to enter info about them selves for an about section
            type: 'confirm',
            name: 'confirmAbout',
            message: `Would you like to enter some information about yourself for an "About" section?`,
            default: true
        },
        {//handle the information input when confirmAbout is true
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => confirmAbout
        }
    ])  
};
//portfolioData is the object returned from promptUser
// const promptProject = portfolioData => {
promptProject = portfolioData => {//this is asynchronous
    if(!portfolioData.projects){
        portfolioData.projects = [];
    }
    
    console.log(`
=================
Add a New Project
=================
    `);
    return inquirer.prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectNameInput => {
                if (projectNameInput){
                    return true;
                } else {
                    console.log('Please enter a project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you use for this project? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log(`Please enter your project's GitHub link`);
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    //project data is the promised object returned with all the properties we are defining
    .then(projectData => {
        //push 
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject){//if user wanted to add another project
            return promptProject(portfolioData);//promptProject again
        } else {//if not adding another one
            return portfolioData;//return the object as is.
        }
    });
};

//  this works great but lets refactor this below! :) 
// promptUser()
//     //when promptUser async func is done then return the answers from
//     //the promise object
//     //this .then() isn't entirely necessary to pass the object into promptProject()
//     //  but I still like to have it for the sake of seeing every step happening for now
//     .then(answers => {//the answers define what is contained in portfolioData
//         console.log(answers);
//         return answers;
//     })
//     //after the object is returned then the answers object is passed in as a parameter
//     .then(promptProject)
//     //after promptProject async func is done then return the portfolioData Object
//     .then(portfolioData => {
//         console.log(portfolioData);
//         //assign a variable to the returned multi line string of the generatePage function
//         const pageHTML = generatePage(portfolioData);
//         //write the contents of the pageHTML variable
//         //  to a new created file and if theres an error throw a new error
//         fs.writeFile('./dist/index.html', pageHTML, err =>{
//             if (err) throw new Error(err);

//             console.log('Page created! check out index.html in this directory to see.');
        
//             fs.copyFile('./style.css', './dist/style.css', err => {
//                 if (err){
//                     console.log(err)
//                     return;
//                 }
//                 console.log('Style sheet copied successfully.');
//             });
//         });
//     });

//starting the refactor of the promptUser() function above 
//  creating our own Promises
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return generateSite.writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return generateSite.copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    })