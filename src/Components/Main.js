import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Single from './Single'


class Main extends Component {
    
    constructor(){
        super();
    }

    render(){
        console.log(this.props.posts)
        return (<div>
                    <h1>
                        <Link to="/"> Photowall </Link>
                    </h1>
                    <Route exact path="/" render={() => (
                        <div>
                            <PhotoWall {...this.props} />
                        </div>
                    )}/>

                    {/* <Route path="/AddPhoto" component= {AddPhoto}/> */}

                    { <Route path="/AddPhoto" render={({history}) => (
                        <div>
                            <AddPhoto {...this.props}/>
                        </div>
                    )}/> }

                    <Route exact path="/single/:id" render={(params) => (
                        <div>
                            <Single {...this.props} {...params} />
                        </div>
                    )}/>

                    
               </div>
        )
    }
}

export default Main;
