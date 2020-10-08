const { timeStamp } = require('console')
const markov = require('./markov')


describe('markov class and functions', function() {

    test('does not return input in same order', function() {
        let mm = new markov.MarkovMachine("the cat in the hat");

        expect(mm.makeText()).not.toEqual('the cat in the hat');
    })

    test('includes all inputted words in output', function() {
        let mm = new markov.MarkovMachine("the cat in the hat");
        let text = mm.makeText();
        
        expect(text).toMatch(/(the)/);
        expect(text).toMatch(/(cat)/);
        expect(text).toMatch(/(in)/);
        expect(text).toMatch(/(the)/);
        expect(text).toMatch(/(hat)/);
    })
})