const joke = document.querySelector(".joke");
const button = document.querySelector("button");

const headers = new Headers({
  'Accept': 'application/json'
});

const apiUrl = 'https://icanhazdadjoke.com/';

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
  })
  .catch(error => {
    console.log(error);
  })
}

getJoke();

function printJoke(){
  
}