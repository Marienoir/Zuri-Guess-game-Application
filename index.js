const gameGuess = (min, max) => {
  let score = 0;
  let stage = 1;
  let username = prompt('Enter your username ');
  let guess = parseInt(prompt(`Guess an integer between ${min} and ${max} `));
  let number;
    do {
      number = Math.round(Math.random() * (max - min) + min);
        if (number === guess) {
          max++;
          stage += 1;
          score += 1;
          console.log(`Correct guess 🤗🤗!! Promoted to stage ${stage} with score ${score}`)
          guess = parseInt(prompt(`Guess an integer between ${min} and ${max} `))
        } 
    } while (guess === number);
    console.log(`Oops😬, ${username.toUpperCase()}. The number to be guessed was ${number}. You had a total score of ${score} at stage ${stage}. Try again!!!`);
}
gameGuess(1,2);