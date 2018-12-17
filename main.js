let jokes_list = null;
let joke_form = null;
let joke_input = null;
// comment
let comments_list = null;
let comment_form = null;
let comment_input = null;

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
    //comment
    comments_list = document.querySelector("#comments_list");
    comment_form = document.querySelector("section");
    comment_input = document.querySelector("#comment_body");

    loadComments();
    comment_form.addEventListener("click", (x) => {
      // e.preventDefault();
        let comment_text = comment_input.value;
        if(comment_text.trim() === "") {
            alert("Please write a comment");
        } else {
            addComment(comment_text.trim());
            saveComment(comment_text.trim());
            comment_input.value = "";
        }
    })
    

})

 // add comment
 function addComment(text) {
    let template = document.createElement("li");
    template.classList.add("comment");
    template.innerText = text;
    jokes_list.appendChild(template); 
}

function addJoke(text) {
    let template = document.createElement("li");
    let templatesub = document.createElement("INPUT");
    let templatecom = document.createElement("INPUT");
    templatesub.setAttribute("type", "submit");
    templatesub.setAttribute("value","Comment");
    //templatesub.setAttribute("id","comment_form");
    templatecom.setAttribute("type", "text");
    templatecom.setAttribute("id","comment_body");
    template.classList.add("joke");
    template.innerText = text;
    jokes_list.appendChild(template);
    jokes_list.appendChild(templatesub);
    jokes_list.appendChild(templatecom);
    }
   
    // Save comment
function saveComment(text) {
    let comments = localStorage.getItem("local_comments");
    if(comments == null) {
        comments = [];
    } else {
        comments = JSON.parse(comments);
    }
    comments.push(text);
    localStorage.setItem("local_comments", JSON.stringify(comments));
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



// loadComments
function loadComments() {
    let comments = localStorage.clear("local_comments");
    if(comments == null) return;
    comments = JSON.parse(comments);
    for(let comment of comments) {
        addComment(comment);
    }
}
function loadJokes() {
    let jokes = localStorage.clear("local_jokes");
    if(jokes == null) return;
    jokes = JSON.parse(jokes);
    for(let joke of jokes) {
        addJoke(joke);
    }
}
