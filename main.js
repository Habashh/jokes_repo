let jokes_list = null;
let joke_form = null;
let joke_input = null;

document.addEventListener("DOMContentLoaded", (e) => {
    jokes_list = document.querySelector("#jokes_list");
    joke_form = document.querySelector("#joke_form");
    joke_input = document.querySelector("#joke_body");

    loadJokes();
    joke_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let joke_text = joke_input.value;
        if(joke_text.trim() === "") {
            alert("Please write a joke");
        } else {
            addJoke(joke_text.trim());
            saveJoke(joke_text.trim());
            joke_input.value = "";
        }
    })


})

function addJoke(text) {
    let template = document.createElement("li");
    template.classList.add("joke");
    template.innerText = text;
    jokes_list.appendChild(template);
}

function saveJoke(text) {
    let jokes = localStorage.getItem("local_jokes");
    if(jokes == null) {
        jokes = [];
    } else {
        jokes = JSON.parse(jokes);
    }
    jokes.push(text);
    localStorage.setItem("local_jokes", JSON.stringify(jokes));
}

function loadJokes() {
    let jokes = localStorage.getItem("local_jokes");
    if(jokes == null) return;
    jokes = JSON.parse(jokes);
    for(let joke of jokes) {
        addJoke(joke);
    }
}