import React from 'react';
import FeedTypeC from './FeedTypeC';
import {Feed, Icon} from 'semantic-ui-react'

const FeedTypeB = (props)=> {
    return(
        <>
        <Feed.Event>
            <Feed.Label>
                <Icon name={props.ikon}/>
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    {props.summary} 
                </Feed.Summary>{' '}
                <Feed.Date>{props.date}</Feed.Date>
                <FeedTypeC 
                    konten="Saya senang belajar pemrograman"
                    extText="11 Likes"
                />
            </Feed.Content>
        </Feed.Event>   
        </>
    )
}

export default FeedTypeB