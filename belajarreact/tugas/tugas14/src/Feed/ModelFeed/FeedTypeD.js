import React from 'react';
import {Feed, Image, Icon} from 'semantic-ui-react'

const FeedTypeD = (props)=> {
    return(
    <>
        <Feed.Event>
            <Feed.Label>
                <Image src={props.image}/>
            </Feed.Label> 
            <Feed.Content>
                <Feed.Date>{props.date}</Feed.Date>
                <Feed.Summary>
                    {props.summary}
                </Feed.Summary>
                <Feed.Extra images>
                    <Image as="a" src={props.extImages1}/>
                    <Image as="a" src={props.extImages2}/>
                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name={props.ikon}/> {props.countLike} like
                    </Feed.Like> 
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    </>
    )
}

export default FeedTypeD