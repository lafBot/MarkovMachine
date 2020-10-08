/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let map = new Map();

    for (let i=0; i< this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i+1] || null;

      if (map.has(word)) {
        map.get(word).push(nextWord);
      } else {
        map.set(word, [nextWord]);
      }
    }
    this.map = map;
  }

  static choice(arg) {
    return arg[Math.floor(Math.random() * arg.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.map.keys());
    let key = MarkovMachine.choice(keys);
    let sentence = [];

    while (sentence.length < numWords && key !== null) {
      sentence.push(key);
      key = MarkovMachine.choice(this.map.get(key));
    }
    return sentence.join(" ");
  }
}


module.exports = {
  MarkovMachine
}