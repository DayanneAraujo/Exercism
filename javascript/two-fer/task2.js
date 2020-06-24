'use strict';

/*
    Please note that I could not run the automatic tests included on codility, because the default
    function given was "solution()" without any input parameters.
    I believe your test is calling another function, but I can't tell what the name of that is.

    I manually created an input element within the solution() function just to continue with the exercise.
    You can change the "data-count" attribute to the count desired in order to run the tests you want.

    I have used console.log to simulate what the returned HTML would look like.
*/

function solution() {
    // Simulating an input element
    let commentList = document.createElement("div");
    commentList.classList.add("comment-list");
    commentList.setAttribute("data-count", 2);

    commentList.innerHTML = "Loading..." // set loading info

    fetch(`https://www.example.com/comments?count=${commentList.getAttribute("data-count")}`)
        .then(response => response.json())
        .then(data => addToCommentList(data, commentList))
        .catch(error => commentList.innerHTML = '')

    return commentList.outerHTML; // illustrative purposes
}

function addToCommentList(comments, commentList){
    commentList.innerHTML = '';

    comments.forEach((comment) => {
        commentList.appendChild(
            createItem(comment)
        )
    })
    console.log(commentList.outerHTML); // illustrative purposes
}
function createItem(comment){
    let commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");

    let itemUsername = document.createElement("div")
    itemUsername.classList.add("comment-item__username")
    itemUsername.innerHTML = comment.username

    let itemMessage = document.createElement("div")
    itemMessage.classList.add("comment-item__message")
    itemMessage.innerHTML = comment.message

    commentItem.appendChild(itemUsername);
    commentItem.appendChild(itemMessage);

    return commentItem;
}