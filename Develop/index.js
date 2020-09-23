// require inquirer
const inquirer = require('inquirer');
// require fs
const fs = require('fs');
// require generateMarkdown module
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
// Use array to store questions which will be asked to the user to determine what to include in each section. Reference these indecies in inquirer.prompt
const questions = [
    "What is the Title of your Project?", //<----type: input, message: questions[0], name: Title
    "What would you like to include in the description section?",//<--- type:input, message: questions[1], name:Description
    "How do you install your application?",//<---type: input, message: questions[2], name:Installation Instructions
    "What usage information would you like to include?",//<--type:input, message: questions[3], name:Usage Info
    "How can people contribute?",//<--type:input, message: questions[4], name: Contributing
    "How do users test if your application is working?",//<--type:input, message: questions[5], name: Testing
    "What license would you like to use?",//<--type:checkbox, message: questions[6], name: Licensing
    "What is your email address?", //<---type: input, message: questions[7], name:Questions
    "What is your GitHub username?"//<--- type: input, message: questions[8], name: GitHub UserName

];


// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) throw err;
    })
}

// // function to initialize program
function init() {
    inquirer.prompt([
        {
            type:"input",
            message:questions[0],
            name:"Title"
        },
        {
            type:"input",
            message:questions[1],
            name:"Description"
        },
        {
            type:"input",
            message:questions[2],
            name:"Installation" 
        },
        {
            type:"input",
            message:questions[3],
            name:"Usage"
        },
        {
            type:"input",
            message:questions[4],
            name:"Contributing"
        },
        {
            type:"input",
            message:questions[5],
            name:"Tests"
        },
        {
            type:"checkbox",
            choices:["MIT", "Something Else"],
            message:questions[6],
            name:"License"
        },
        {
            type: "input",
            message:questions[7],
            name:"Email"
        },
        {
            type:"input",
            message:questions[8],
            name:"GitHub"
        },
    ]).then(function(response){
        const markdown = generateMarkdown(response);
        writeToFile("ReadMe2.md", markdown)
    })
}

// // function call to initialize program
init();
