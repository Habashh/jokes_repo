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
    comment_form = document.querySelector("#comment_form");
    comment_input = document.querySelector("#comment_body");

    loadComments();
    comment_form.addEventListener("submit", (x) => {
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
 function addComment(text1) {
    let template1 = document.createElement("li");
    template1.classList.add("comment");
    template1.innerText = text1;
    comments_list.appendChild(template1); 
}

function addJoke(text) {
    let template = document.createElement("li");
    template.setAttribute("id","item")
    let templatesub = document.createElement("INPUT");
    let templatecom = document.createElement("INPUT");
    let  templateform = document.createElement("form");
    let  templatediv = document.createElement("div");
    let  templatedul = document.createElement("ul");
    templatesub.setAttribute("type", "submit");
    templatesub.setAttribute("value","Comment");
    templatesub.setAttribute("onclick","addComment()");
    templatecom.setAttribute("type", "text");
    templatecom.setAttribute("id","comment_body");
    templateform.setAttribute("type","form");
    templateform.setAttribute("id","comment_form");
    templatediv.setAttribute("type","div");
    templatediv.setAttribute("id","comments_container");
    templatedul.setAttribute("type","ul");
    templatedul.setAttribute("id","comments_list");
    template.classList.add("joke");
    template.innerText = text;
    jokes_list.appendChild(template);
    jokes_list.appendChild(templatesub);
    jokes_list.appendChild(templatecom);
    jokes_list.appendChild(templateform);
    comment_form.appendChild(templatediv);
    templatediv.appendChild(templatedul);
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
