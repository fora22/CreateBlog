const documentBody = document.querySelector("body");
const docHeading = document.createElement('h1');
const post = [];
const postLink = [
    './post/BinarySearch.html',
    './post/Stack.html'
]
const postTitle = [
    '이진 탐색',
    '스택 구조'
]

function postListDesign(index) {
    const postHtml = document.createElement('a');
    postHtml.href = postLink[index];
    postHtml.title = postTitle[index];
    postHtml.innerText = postTitle[index];

    const postDate = document.createElement('div');
    postDate.innerText = new Date();
    postHtml.appendChild(postDate);

    return postHtml;
}

function makePostList(pList) {
    for (let i = 0; i < postLink.length; i++) {
        post.push(function() {
            const tempPost = document.createElement('div');
            tempPost.className = "postItem"
            
            const postItem = postListDesign(i);
            tempPost.appendChild(postItem);

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