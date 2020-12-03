import React, { useState } from 'react';
import {Feed} from 'semantic-ui-react';
import FeedTypeA from '../Feed/FeedType/FeedTypeA';
import listData from '../Data/feedData';
import FeedTypeB from './FeedType/FeedTypeB';
import FeedTypeC from './FeedType/FeedTypeC';


const FeedContent = (props)=> {

    const [user1] = useState(listData)

    return(
        <>
        <Feed size="small">
                {user1.typeA.map((item,index)=>(
                    <FeedTypeA
                        key={index}
                        gambar={item.gambar}
                        user={item.user}
                        date={item.date}
                        ikon={item.ikon}
                        countLike={item.countLike}
                />
                ))}
                {user1.typeB.map((item,index)=>(
                    <FeedTypeB 
                        key={index}
                        gambar={item.gambar}
                        summary={item.summary}
                        date={item.date}
                        extraText={item.extraText}
                        like={item.like}
                    />
                ))}
                {user1.typeC.map((item,index)=>(
                    <FeedTypeC 
                        key={index}
                        gambar={item.gambar}
                        date={item.date}
                        summary={item.summary}
                        extraImages={item.extraImages}
                        ikon={item.ikon}
                        countLike={item.countLike}
                    />
                ))}
        </Feed>
        </>
    )
}

export default FeedContent
