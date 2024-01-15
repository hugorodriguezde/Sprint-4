
document.addEventListener('DOMContentLoaded', () => {
  const joke = document.querySelector(".joke");
  const button = document.querySelector(".btn");
  const score = document.querySelectorAll(".score") as NodeListOf<HTMLButtonElement>;
  const repportAcudits: {joke:string, score: number, date:string}[] = [];
  let   jokeScore: number = 0;
  const headers = new Headers({
  'Accept': 'application/json'
});

const apiUrl = 'https://icanhazdadjoke.com/'; 
const chuckApiUrl = 'https://api.chucknorris.io/jokes/random';

function getJoke() {
  fetch(apiUrl, {
    method: 'GET',
    headers: headers
  })
  .then((res) => {
    if(!res.ok) {
      throw new Error (`Error: ${res.status} - ${res.statusText}`)
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    const jokeText = data.joke
    if (joke) {
      joke.textContent = jokeText;
    }
  })
  .catch(error => {
    console.log(error);
  })
}


function getChuckJoke() {
  fetch(chuckApiUrl, {
    method: 'GET',
    headers: headers
  })
  .then((res) => {
    if(!res.ok) {
      throw new Error (`Error: ${res.status} - ${res.statusText}`)
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    const chuckJokeText = data.value
    if (joke) {
      joke.textContent = chuckJokeText;
    }
  })
  .catch(error => {
    console.log(error);
  })
}
getJoke();
let pressed:number = 0;
if (button) { button.addEventListener('click', (e) => {
  pressed += 1;
  if (pressed % 2 != 0){
    getChuckJoke();
  }
  else
  {
    getJoke();
  }
})
}

function jokeRepport(score:number) {

}

score.forEach((button, index) => {
  button.addEventListener('click', () => {
      jokeScore = index + 1;
  })
})
  });
