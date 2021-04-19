import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalStates';


export const EditArticle = (route) => {
    let history = useHistory()
    const { article, editArticle } = useContext(GlobalContext)
    const [selectedArticle, setSelectedArticle] = useState({
        id: null,
        category: "",
        heading: "",
        description: "",
        subHeading: "",
        author: ""
    })
    const currentArticleId = route.match.params.id;

    useEffect(() => {
        const articleId = currentArticleId
        const selectedArticle = article.find(x => x.id === parseInt(articleId))
        setSelectedArticle(selectedArticle)
    }, [article, currentArticleId])

    const handleChange = (articleKey, val) => {
        setSelectedArticle({ ...selectedArticle, [articleKey]: val })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editArticle(selectedArticle)
        history.push('/')
    }

    return (
        <Fragment>
            <Container>
                <h3>Edit Article</h3>
                <br />
                <br />
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Article Heading</Form.Label>
                        <Form.Control type="text" id="heading" value={selectedArticle.heading} onChange={(e) => handleChange("heading", e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Sub Heading</Form.Label>
                        <Form.Control as="textarea" id="exampleFormControlTextArea1" rows={2} value={selectedArticle.subHeading} onChange={(e) => handleChange("subHeading", e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Description</Form.Label>
                        <Form.Control as="textarea" id="exampleFormControlTextArea1" rows={2} value={selectedArticle.description} onChange={(e) => handleChange("description", e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Article Category</Form.Label>
                        <Form.Control type="text" id="category" value={selectedArticle.category} onChange={(e) => handleChange("category", e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Author Name</Form.Label>
                        <Form.Control type="text" id="author" value={selectedArticle.author} onChange={(e) => handleChange("author", e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Link to="/"><Button variant="danger">Cancel</Button></Link>
                </Form>
            </Container>
        </Fragment>
    )
}