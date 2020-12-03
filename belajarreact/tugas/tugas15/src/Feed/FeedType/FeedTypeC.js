import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const FeedTypeC = (props)=> {
    return(
        <>
            <Feed.Event>
                <Feed.Label image={props.gambar}/>
                <Feed.Content>
                    <Feed.Date>{props.date}</Feed.Date>
                    <Feed.Summary>
                        {props.summary}
                    </Feed.Summary>
                    <Feed.Extra images={props.extraImages}/>
                    <Feed.Meta>
                        <Icon name={props.ikon} />{props.countLike}
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
        </>
    )
}

export default FeedTypeC
