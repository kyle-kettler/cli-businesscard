#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';

const options = {
  padding: 1,
  width: 64,

  borderColor: "green",
  titleAlignment: "center",
  borderStyle: "double",
}

const name = chalkAnimation.rainbow('Kyle Kettler')

const intro = `Hi, I'm Kyle Kettler.

I am a ${chalk.strikethrough('designer')} frontend engineer.

I've been designing and building online projects for over 10 years.\n\n`;

const links = [
  { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://kylekettler.com" },
  { name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"), url: "    https://github.com/kyle-kettler" },
  { name: chalk.hex("#fff").bgHex("#0072b1")("LinkedIn"), url: "   https://www.linkedin.com/in/kylekettler/" },
]

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

figlet.text(
  "Kyle Kettler",
  {
    font: "Slant",
    width: 80,
    horizontalLayout: "fitted",
  },
  function(err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
    console.log(boxen(intro + linkList, options));
  }
)
// figlet("Kyle Kettler", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
//   console.log(boxen(intro + linkList, options));
// });

// figlet.fonts(function (err, fonts) {
//   if (err) {
//     console.log("something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.dir(fonts);
// });
