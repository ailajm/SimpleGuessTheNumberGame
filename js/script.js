// **FILE LINK TEST**
    // alert('Reportin for duty!')

// Game object
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    },
    getGuess: function() {
        let guess = '';
        while(guess < this.smallestNum || guess > this.biggestNum) {
            guess = parseInt(prompt(`Please enter a number between ${this.smallestNum}, and ${this.biggestNum}: `));
        }
        return guess;
    }
  };

