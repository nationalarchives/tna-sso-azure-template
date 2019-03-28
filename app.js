const pug = require("pug"),
  fs = require("fs"),
  path = require("path"),
  templatePath = "./assets/templates",
  copydir = require("copy-dir"),
  outputDir = "output",
  outputCssFolder = `${outputDir}/css`,
  outputImgFolder = `${outputDir}/img`,
  pretty = require("pretty"),
  colors = require("colors/safe");

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
              pretty(compiledFunction()),
              err => {
                if (err) throw err;
                console.log(
                  colors.bold(`${fileName.replace(".pug", ".html")}`),
                  "file has been saved 👍🏼"
                );
              }
            );
          });
        });
      });
    }
  });
});
