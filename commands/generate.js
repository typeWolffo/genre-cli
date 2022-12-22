const { mkdir } = require("fs").promises;
const { existsSync, writeFile } = require("fs");
const path = require("path");
const chalk = require("chalk");

function generate(resource) {
  const { name, style, javascript } = resource;
  const dir = "./components";
  const extension = javascript ? ".js" : ".ts";
  const resourcePath = path.join(dir, name);

  const createResource = () => {
    mkdir(resourcePath, { recursive: true }).then(() => {
      const fileName =
        String(name).charAt(0).toUpperCase() + String(name).slice(1);

      // create component
      const component = `${resourcePath}/${fileName}${extension}x`;
      const componentContent = `
      function ${fileName}() {
        return (
          <div>
            <span>${fileName}</span>
          </div>
        );
      }
      export default ${fileName};
      `;

      writeFile(component, componentContent, (error) => {
        if (error) console.log(chalk.red.bold(error));
        console.log(chalk.yellow.bold(`${component} created`));
      });

      // create stylesheet
      const stylesheet = `${resourcePath}/${name}.${style}`;

      writeFile(stylesheet, "", (error) => {
        if (error) console.log(chalk.red.bold(error));
        console.log(chalk.green.bold(`${stylesheet} created`));
      });

      // create index file
      const indexFile = `${resourcePath}/index${extension}`;
      const indexContent = `export { default as ${fileName} } from './${fileName}'`;

      writeFile(indexFile, indexContent, (error) => {
        if (error) console.log(chalk.red.bold(error));
        console.log(chalk.blue.bold(`${indexFile} created`));
      });
    });
  };

  if (!existsSync(dir)) {
    console.log(
      chalk.blue.bold("There is no components directory - creating...")
    );

    mkdir(dir, { recursive: true }).then(() => {
      createResource();
    });
    return;
  }

  if (existsSync(resourcePath)) {
    console.log(chalk.blue.red(`${resourcePath} already exist - aborting...`));
    return;
  }

  createResource();
}

module.exports = generate;
