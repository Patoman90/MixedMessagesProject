let saying1 = "Failure is part of achieving success.";
let saying2 = "It will not always be good, but it will not always be bad.";
let saying3 = "When you have a unreachable goal ahead, remember to look back.";
let saying4 = "Not every path ends with a reward, but that doesn't mean you don't have to choose it.";
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

const chooseSaying = [saying1, saying2, saying3, saying4, saying5, saying6, saying7,saying8, saying9, saying10];
const randomWord = Math.floor(Math.random() * chooseSaying.length);

let changeThis = document.querySelector("button");

changeThis.addEventListener('click', () => {
  document.getElementById('pickMe').innerHTML= chooseSaying[randomWord];
});