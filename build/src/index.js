"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const joke = document.querySelector(".joke");
    const button = document.querySelector(".btn");
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
            if (!res.ok) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
            .then(data => {
            console.log(data);
            const jokeText = data.joke;
            if (joke) {
                joke.textContent = jokeText;
            }
        })
            .catch(error => {
            console.log(error);
        });
    }
    getJoke();
    if (button) {
        button.addEventListener('click', (e) => {
            getJoke();
        });
    }
});
//# sourceMappingURL=index.js.map