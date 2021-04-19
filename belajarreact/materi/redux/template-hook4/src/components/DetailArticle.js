import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalStates';

export const DetailArticle = (route) => {
    const [data, setData] = useState('')
    const { article } = useContext(GlobalContext);
    const currentArticleId = route.match.params.id;

    useEffect(() => {
        const articleId = currentArticleId
        const selectedArticle = article.find(x => x.id === parseInt(articleId))
        setData(selectedArticle)
    }, [article, currentArticleId])
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col md={12}>
                        <Link to="/">
                            <Row>
                                <Col md={12}>
                                    <span>{data && data.category}</span>
                                    <h4>
                                        {data && data.heading}
                                    </h4>
                                    <p>{data && data.subHeading}</p>
                                    <br /><br />
                                    <p>{data && data.description}</p>
                                    <span>{data && data.author}</span>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
