// **FILE LINK TEST**
    // alert('Reportin for duty!')

// Game object
const game = {
    title: 'Guess the Number!',
    winner: false,
    biggestNum: NaN,
    smallestNum: NaN,
    secretNum: NaN,
    prevGuesses: [],
    // Rolls a random number for the computer and assigns to secretNum variable
    play: function() {
        this.getNums();
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        do{
            let guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess);
        }while(this.winner === false);
    },
    // Prompts user for their number guess, protects from non-applicable entries, returns user's guess, loops if incorrect guess.
    getGuess: function() {
        let guess = NaN;
        do {
            guess = parseInt(prompt(`Please enter a number between ${this.smallestNum}, and ${this.biggestNum}: `))
        }while(guess < this.smallestNum || guess > this.biggestNum && guess);
        return guess;
    },
    // Alerts user if they are correct, or not, if too high, or low, sets winner, and lists previous guess.
    render: function(guess) {
        if(guess === this.secretNum) {
            alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
            this.winner = true;
        }else{
            alert(`Your guess is too ${guess > this.secretNum ? 'high' : 'low'}. Previous guesses: ${this.prevGuesses.join(', ')}`)
        };
    },
    getNums: function(){
        this.biggestNum = parseInt(prompt('Please enter the biggest number: '));
        this.smallestNum = parseInt(prompt('Please enter the smallest number: '));
        return this.biggestNum;
        return this.smallestNum;
    }
  };

const $startBtn = $('#startBtn');


$startBtn.click(function() {
    game.play();
});
  