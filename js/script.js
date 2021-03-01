// **FILE LINK TEST**
    // alert('Reportin for duty!')

// Game object
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    // Rolls a random number for the computer and assigns to secretNum variable
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        let winner;
        do{
            let guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess);
        }while(!winner);
    },
    // Prompts user for their number guess, protects from non-applicable entries, returns user's guess.
    getGuess: function() {
        let guess = NaN;
        do {
            guess = parseInt(prompt(`Please enter a number between ${this.smallestNum}, and ${this.biggestNum}: `))
        }while(guess < this.smallestNum || guess > this.biggestNum && guess);
        return guess;
    },
    render: function(guess) {
        if(guess === this.secretNum) {
            alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
            return true;
            winner = true;
        }else{
            alert(`Your guess is too ${guess > this.secretNum ? 'high' : 'low'}. Previous guesses: ${this.prevGuesses.join(', ')}`)
            return false;
        };
    }
  };

  game.play();

  

// getGuess() while loop instead of do/while

        // while(guess < this.smallestNum || guess > this.biggestNum) {
        //     guess = parseInt(prompt(`Please enter a number between ${this.smallestNum}, and ${this.biggestNum}: `));
        // }