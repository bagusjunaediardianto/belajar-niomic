import React, { Fragment, useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalStates';

export const ListArticle = () => {
    const { article, deleteArticle, editArticle } = useContext(GlobalContext)

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col md={8}>
                        <h3>Article Inventory</h3>
                    </Col>
                    <Col md={4} className="text-right">
                        {article.length >= 1 ? (
                            <Link to="/create">
                                <Button variant="primary">
                                    Create New Article
                                </Button>
                            </Link>
                        ) : (
                            <p></p>
                        )}
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {article.length > 0 ? (
                        <Col md={12}>
                            {article.map(article => (
                                <div key={article.id}>
                                    <Row>
                                        <Col md={8}>
                                            <Link to={`/detail/${article.id}`}>
                                                <span>{article.category}</span>
                                                <h4>{article.heading}</h4>
                                                <p>{article.subHeading}</p>
                                                <span>{article.author}</span>
                                            </Link>
                                        </Col>
                                        <Col md={4} className="text-right">
                                            <Link to={`/edit/${article.id}`}>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => editArticle(article.id)}
                                                >EDIT ARTIKEL</Button>
                                            </Link>
                                            <Button
                                                variant="danger"
                                                onClick={() => deleteArticle(article.id)}
                                            >HAPUS ARTIKEL</Button>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Col>
                    ) : (
                        <Container>
                            <p>Kamu tidak memiliki artikel</p>
                            <Link to="/create">
                                <Button variant="primary">
                                    Create New Article
                                </Button>
                            </Link>
                        </Container>
                    )}
                </Row>
            </Container>
        </Fragment>
    )
}