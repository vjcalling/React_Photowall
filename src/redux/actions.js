//remove
export function removePost(index) {
    console.log(index);
    return {
        type: "REMOVE_POST",
        index: index
    }
}

//add
export function addPost(post) {

    return {
        type: "ADD_POST",
        post: post
    }
}