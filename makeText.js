const { create } = require('domain');
/** Command-line tool to generate Markov text. */

const fs = require('fs');
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

let path = 'eggs.txt'

function makeText() {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error("There was an error reading the file: ", err);
            process.kill(1);
        }

        let product = new markov.MarkovMachine(data)
        console.log(product.makeText())
    })
}
