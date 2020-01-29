const inquirer = require("inquirer");
const fs = require("fs")
const design = require("./generate")
const pdf = require("pdfkit")

const doc = new PDFDocument;

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
      },
      {
        type: "checkbox",
        message: "What is your favorite color?",
        name: "color",
        choices: ["blue","green","pink","red"]
      },
  ])

  pdf.create(htmlbody).toStream(function(err, stream) {

    if (response.confirm === response.color) 
    return next(err);
    stream.pipe(fs.createWriteStream("./generate"));

    res.status(200);
    res.send('Success');
  });
    
//   .then(function(response) {

//     if (response.confirm === response.password) {
//       console.log("Success!");
//     }
//     else {
//       console.log("Uh-oh?! That didn't work...");
//     }
//   });