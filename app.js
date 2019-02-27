const pug = require("pug");
const fs = require("fs");
const path = require("path");
const templatePath = "./assets/templates";
const copydir = require("copy-dir");
const outputCssFolder = "output/css";
const outputImgFolder = "output/img";

fs.readdir(templatePath, function(err, files) {
  if (err) {
    throw err;
  }

  files.forEach(function(fileName) {
    let file = path.join(__dirname, templatePath, fileName),
      stats = fs.statSync(file);

    if (stats.isFile() && fileName !== ".DS_Store") {
      fs.readFile(file, "UTF-8", function(err, contents) {
        if (err) {
          throw err;
        }

        const compiledFunction = pug.compileFile(file);

        fs.mkdir(outputCssFolder, { recursive: true }, err => {
          if (err) throw err;
        });
        fs.mkdir(outputImgFolder, { recursive: true }, err => {
          if (err) throw err;
        });

        copydir.sync("assets/img", outputImgFolder);

        fs.writeFile(
          `output/${fileName}.html`.replace(".pug", ""),
          compiledFunction(),
          err => {
            if (err) throw err;
            console.log("The file has been saved!");
          }
        );
      });
    }
  });
});
