import React from 'react';
import {Feed, Image, Icon} from 'semantic-ui-react';

const FeedTypeA = (props)=> {
    return (
    <>

        <Feed.Event>
            <Feed.Label>
                <Image src={props.gambar} alt="maybe content user image" size="small"/>
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>{props.user}</Feed.User> added you as friend
                    <Feed.Date>{props.date}</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                <Feed.Like>
                    <Icon name={props.ikon} /> {props.countLike} Like
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    </>
    )
}

export default FeedTypeA