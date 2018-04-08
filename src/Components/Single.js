import React, {Component} from 'react';
import Photo from './Photo'
import Comments from './Comments'



class Single extends Component {


    render() {
        const id = Number(this.props.match.params.id)   //comes as string from params
        const posts = this.props.posts
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments


        console.log(post)
        return (
            <div className="single-photo">
                <Photo post={post} />
                <Comments addComment={this.props.addComment} comments = {comments}/>
            </div>
        )
    }
}

export default Single