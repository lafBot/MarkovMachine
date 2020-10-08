const { create } = require('domain');
/** Command-line tool to generate Markov text. */

const fs = require('fs');
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function makeTextFromFile(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error("There was an error reading the file: ", err);
            process.kill(1);
        } else {
            let result = new markov.MarkovMachine(data);
            console.log(result.makeText());
        }
    })
}

async function makeTextFromURL(path) {
    const source = await axios.get(path);
    let result;
    try {
        result = new markov.MarkovMachine(source.data);
        console.log(result.makeText());
    } catch (err) {
        console.error("Unable to retrieve source data:", err);
        process.kill(1);
    }
}

let [method, path] = process.argv.slice(2);

if (method == 'file') {
    makeTextFromFile(path);
}

else if (method == 'url') {
    makeTextFromURL(path);
}

else {
    console.error(`Method ${method} unknown`);
    process.kill(1);
}