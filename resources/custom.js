//Sayings declared as varibale data.
let saying1 = "Failure is part of achieving success.";
let saying2 = "It will not always be good, but it will not always be bad.";
let saying3 = "When you have a unreachable goal ahead, remember to look back.";
let saying4 = "Not every path ends with a reward, but that doesn't mean you don't have to choose it.";
let saying5 = "When the fear of change is so great it keeps us in the same place.";
let saying6 = "When the only luxury we have is our own thoughts.";
let saying7 = "We are only as strong as our dignity allows us.";
let saying8 = "Mankind has nothing only when he lacks the will.";
let saying9 = "When the goals we set are not ours and our success is not theirs.";
let saying10 = "Your path is a mixture of your choices and hesitations.";
let saying11 = "When we worship infantility because we are unable to face maturity.";
let saying12 = "Truth is not what you want it to be; it is what it is, and you must bend to it's power or live a lie.";
let saying13 = "Well raised children listen to their parents.";
let saying14 = "Respect is earned not a given.";
let saying15 = "Keeping silent about our past will not make our future louder.";
let saying16 = "Heaviest shackles are worn by people who are afraid of failing themselves.";
let saying17 = "Comfort of familiarity may prevent us from any change.";

//Variable that selects the html page button.
let changeThis = document.querySelector("button");

//Funtionality that creates a random saying when the button element is clicked.
changeThis.addEventListener('click', () => {

  //Variable that creates a array that uses the sayings data as values.
  const chooseSaying = [saying1, saying2, saying3, saying4, saying5, saying6, saying7,saying8, saying9, saying10, saying11, saying12, saying13, saying14, saying15, saying16, saying17];

  //Variable that calculates a random value from the above array.
  const randomWord = Math.floor(Math.random() * chooseSaying.length);

  //DOM selector that targets the <p> tag and changes it's content.
  document.getElementById('pickMe').innerHTML= chooseSaying[randomWord];
});
