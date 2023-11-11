#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

const intro = `Hi, I'm Kyle.

I am a frontend engineer with an extensive background 
in design. I spent a decade as a designer, focused on 
branding and UI design. In 2023, I attended a software 
engineering boot camp and transitioned to frontend 
engineering full-time with a focus in TypeScript, React, 
CSS, Node.js, and relational databases.\n\n`;

const info = [
  { name: chalk.hex("#18181b").bgHex("#e4e4e7")(" Website "), content: "   https://kylekettler.com" },
  { name: chalk.hex("#fff").bgHex("#6e5494")(" GitHub "), content: "    https://github.com/kyle-kettler" },
  { name: chalk.hex("#fff").bgHex("#0072b1")(" LinkedIn "), content: "  https://www.linkedin.com/in/kylekettler/" },
  { name: chalk.hex("#fff").bgHex("#34d399")(" Email "), content: "     hello@kylekettler.com" },
  { name: chalk.hex("#fff").bgHex("#06b6d4")(" Stack "), content: "     JS/TS, CSS, React, Node,js" },
]

const infoList = info.map((line) => `${line.name} ${line.content}`).join("\n");

const outro = `\n 
Feel free to reach out, I'm always down to connect!`

console.log(boxen(intro + infoList + outro, {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  titleAlignment: "center",
  title: "Kyle Kettler",
  borderColor: "blueBright"
}));

