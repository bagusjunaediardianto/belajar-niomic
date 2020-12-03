import React, {Component} from 'react';
import FeedTypeA from './ModelFeed/FeedTypeA';
import FeedTypeB from './ModelFeed/FeedTypeB';
import FeedTypeD from './ModelFeed/FeedTypeD';

class FeedContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            ModelA : <FeedTypeA 
                        images="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                        user="Elliot Fu"
                        date="1 Hour ago"
                        ikon="like"
                        countLike={4}
                     />,
            ModelB : <FeedTypeB 
                        ikon="pencil"
                        summary="You Submitted a new post to the page"
                        date="3 days ago"
                     />,
            ModelC : <FeedTypeD 
                        image="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                        date="4 days ago"
                        summary="David added 2 new Image"
                        extImages1='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png'
                        extImages2='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png'
                        ikon="like"
                        countLike={4}
                     />
        }
    }
    render(){
    return(
        <>
            {this.state.ModelA}
            {this.state.ModelB}
            {this.state.ModelC}

        </>
    )
    }
}
export default FeedContent