import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'


class Main extends Component {
    
    constructor(){
        super();
    }

    
    render(){
        console.log(this.props.posts)
        return (<div>

                    <Route exact path="/" render={() => (
                        <div>
                            <Title title={'Photowall'}/>
                            <PhotoWall posts={this.props.posts} />
                        </div>
                    )}/>

                    {/* <Route path="/AddPhoto" component= {AddPhoto}/> */}

                    {/* <Route path="/AddPhoto" render={({history}) => (
                        <div>
                            <AddPhoto onAddPhoto={(addedPost) => {
                                this.addPhoto(addedPost);
                                history.push('/');
                            }}/>
                        </div>
                    )}/> */}
                    
               </div>
        )
    }
}

export default Main;
