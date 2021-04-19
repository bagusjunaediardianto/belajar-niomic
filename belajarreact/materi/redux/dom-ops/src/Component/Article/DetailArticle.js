import React, { useContext, useEffect, useState } from 'react';
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalStates'

export const DetailArticle = (route) => {
    const [data, setData] = useState('')
    const { article } = useContext(GlobalContext)
    const currentArticleId = route.match.params.id

    useEffect(() => {
        const articleId = currentArticleId
        const selectedArticle = article.find(x => x.id === parseInt(articleId))
        setData(selectedArticle)
    }, [article, currentArticleId])

    return (
        <Segment.Group
            computer={5}
            tablet={8}
            mobile={16}
            as={Link}
            to={"/articles"}
        >
            <Segment>{data && data.category}</Segment>
            <Segment.Group horizontal>
                <Segment>{data && data.articleCode}</Segment>
                <Segment>{data && data.articleName}</Segment>
                <Segment>{data && data.uom}</Segment>
                <Segment>{data && data.supplierCode}</Segment>
            </Segment.Group>
        </Segment.Group>
    )
}