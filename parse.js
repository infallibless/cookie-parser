"use strict";
const fs = require("fs");

function parse(input, output) {
    let new_cookies = "";
    fs.readFileSync(input, 'utf-8').split(/\r?\n/).forEach((line) => {
        if (line.includes("@~$~@infallibless-")) return;  // varies...

        const host = line.split("|")[0]?.replace("HOST KEY: ", "").trim();
        const name = line.split("|")[1]?.replace(" NAME: ", "").trim();
        const value = line.split("|")[2]?.replace(" VALUE: ", "").trim();

        new_cookies += `${host}\tTRUE\t/\tFALSE\t2597573456\t${name}\t${value}\n`;
    });

    fs.writeFile(output, new_cookies, (ea) => {
        if (ea) { console.error(ea) }
         else {
            console.log(`${output} `);
        }
    });
}

parse('./cookies.txt', './rx6.txt');
