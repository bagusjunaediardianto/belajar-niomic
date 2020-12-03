import React from 'react';
import {Feed} from 'semantic-ui-react';


const FeedTypeB = (props)=> {
    return(
        <>
        <Feed.Event>
            <Feed.Label icon={props.gambar}/>
            <Feed.Content>
                <Feed.Summary>
                    {props.summary}
                    <Feed.Date>{props.date}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                    {props.extraText}
                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>{props.like}</Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        </>
    )
}

export default FeedTypeB