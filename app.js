const pug = require("pug");
const fs = require("fs");
const path = require("path");
const templatePath = "./assets/templates";
const copydir = require("copy-dir");
const outputDir = "output";
const outputCssFolder = `${outputDir}/css`;
const outputImgFolder = `${outputDir}/img`;

fs.readdir(templatePath, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(fileName => {
    let file = path.join(__dirname, templatePath, fileName),
      stats = fs.statSync(file);

    if (stats.isFile() && fileName !== ".DS_Store") {
      fs.readFile(file, "UTF-8", (err, contents) => {
        if (err) {
          throw err;
        }

        fs.rmdir(outputDir, () => {
          fs.mkdir(outputDir, () => {
            fs.mkdir(outputCssFolder, { recursive: true }, err => {
              if (err) throw err;
            });
            fs.mkdir(outputImgFolder, { recursive: true }, err => {
              if (err) throw err;
            });

            const compiledFunction = pug.compileFile(file);

            copydir.sync("assets/img", outputImgFolder);

            fs.writeFile(
              `${outputDir}/${fileName}.html`.replace(".pug", ""),
              compiledFunction(),
              err => {
                if (err) throw err;
                console.log("The file has been saved!");
              }
            );
          });
        });
      });
    }
  });
});
