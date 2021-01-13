// import  "./styles"
const documentBody = document.querySelector("body");
const docHeading = document.createElement('h1');
const post = [];
function makePostList(pList) {
    for (let i = 0; i < 5; i++) {
        post.push(function() {
            const tempPost = document.createElement('div');
            tempPost.className = "postItem"
            tempPost.innerText = `${i}`;
            return tempPost;
        }());
        pList.appendChild(post[i]);
    }
    return pList;
}

function init () {
    let postList = document.createElement('div');
    postList.className = "postList";

    postList = makePostList(postList);
    // post.push(makePostList());
    docHeading.innerText = "FoRA's Blog";
    documentBody.appendChild(docHeading);
    documentBody.appendChild(postList);
}

init();