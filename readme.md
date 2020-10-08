# Node Markov Creator
This little project will allow you to create a new story using the Markov model (https://en.wikipedia.org/wiki/Markov_model).  It will randomly generate and log to the console a story based on the sourced url txt file or a locally stored .txt file.  

## Running the app
With node installed as well as the appropriate node modules:

Ex1:
Input into command line:
  **node makeText.js file eggs.txt**

Expected output:
  **... generated text from file 'eggs.txt' ...**

Ex2:
Input into command line:
**node makeText.js url http://www.gutenberg.org/files/11/11-0.txt**

Expected Output:
**... generated text from that URL ...**