import React from 'react';
import {Feed} from 'semantic-ui-react';

const FeedTypeC = (props)=> {
    return(
        <>
        <Feed.Event>
            <Feed.Content>
                {props.konten} 
            <Feed.Extra text>{props.extText}</Feed.Extra>
            </Feed.Content>
        </Feed.Event>   
       </>
    )
}

export default FeedTypeC