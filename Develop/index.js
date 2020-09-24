// require inquirer
const inquirer = require('inquirer');
// require fs
const fs = require('fs');
// require generateMarkdown module
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
// Use array to store questions which will be asked to the user to determine what to include in each section. Reference these indecies in inquirer.prompt
const questions = 
    [
        {
           name:'Title',
           message: "What is the title of your project?",
           type: "input",
        },
        {
            name:'Description',
            message: "Please describe your project",
            type: "input",
         },
         {
            name:'Installation',
            message: "Please describe how to install.",
            type: "input",
         },
         {
            name:'Usage',
            message: "Please include usage information",
            type: "input",
         },
         {
            name:'Contributing',
            message: "How can users contribute?",
            type: "input",
         },
         {
            name:'Tests',
            message: "Please include testing information here.",
            type: "input",
         },
         {
            name:'License',
            message: "What is the title of your Project?",
            choices:["MIT", "GNU GPL v3", "No License"],
            type: "list",
         }
    ]


// // function to write README file
function writeToFile (data) {
    fs.writeFile('README2.md', generateMarkdown(data), function(err){
        if (err) throw err
    })
}

// // function to initialize program
function init(){
inquirer.prompt(questions)
.then(function(data){
    writeToFile(data)
})
.catch(function(err){
    if (err) throw err
})
}

// // function call to initialize program
init();
