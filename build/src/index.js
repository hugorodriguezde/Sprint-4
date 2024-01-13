var joke = document.querySelector(".joke");
var button = document.querySelector("button");
var headers = new Headers({
    'Accept': 'application/json'
});
var apiUrl = 'https://icanhazdadjoke.com/';
function getJoke() {
    fetch(apiUrl, {
        method: 'GET',
        headers: headers
    })
        .then(function (res) {
        if (!res.ok) {
            throw new Error("Error: ".concat(res.status, " - ").concat(res.statusText));
        }
        return res.json();
    })
        .then(function (data) {
        console.log(data);
    })
        .catch(function (error) {
        console.log(error);
    });
}
getJoke();
function printJoke() {
}
