import React, { useState } from 'react';
import {Comment, Header} from 'semantic-ui-react';
import CommentMain from './Model/CommentMain';
import CommentNested from './Model/CommentNested';
import CommentReply from './CommentReply';
import listData from '../Data/commentData';

const CommentContent = ()=> {
    const [data] = useState(listData)
     return (
        <Comment.Group threaded>
        <Header as="h3" dividing>
            Komentar
        </Header>
        {
            data.map((item,index)=>
                (index === 1 ?
                (
                    <>
                    <Comment>
                    <CommentMain 
                        key={index}
                        avatar={item.avatar}
                        author={item.author}
                        metaData={item.metaData}
                        text={item.text}
                        action={item.action}
                    />
                    <Comment.Group>
                    <Comment>
                    <CommentNested 
                       key={index}
                       avatar={item.addingData.avatar}
                       author={item.addingData.author}
                       metaData={item.addingData.metaData}
                       text={item.addingData.text}
                       action={item.addingData.action} 
                    />
                    </Comment>
                    </Comment.Group>
                    </Comment>
                    </>
                ):(
                    <>
                    <Comment>
                    <CommentMain 
                        key={index}
                        avatar={item.avatar}
                        author={item.author}
                        metaData={item.metaData}
                        text={item.text}
                        action={item.action}
                    />
                    </Comment>
                    </>
                )))
        }
        <CommentReply />
        </Comment.Group>
    )
}

export default CommentContent