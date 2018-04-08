//remove post
export function removePost(index) {
    console.log(index);
    return {
        type: "REMOVE_POST",
        index: index
    }
}

//-----------------------------------------------

//add post
export function addPost(post) {

    return {
        type: "ADD_POST",
        post: post
    }
}

//-----------------------------------------------

//add comment
export function addComment(comment, postId) {

    return {
        type: "ADD_COMMENT",
        comment: comment,
        postId: postId
    }
}

//-----------------------------------------------

