#! /usr/bin/env node
const { program } = require("commander");
const generate = require("./commands/generate");

program
  .description("Generate resource folder")
  .requiredOption("-n, --name <name>", "Name of resource")
  .requiredOption("-s, --style <style>", "Extension for stylesheet file", "css")
  .option("-js, --javascript", "Generate js files instead of ts", false)
  .action(generate);

program.parse(process.argv);
