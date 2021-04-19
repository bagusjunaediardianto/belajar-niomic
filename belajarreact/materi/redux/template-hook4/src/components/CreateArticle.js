import React, { Fragment, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalStates';

export const CreateArticle = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const { createArticle, article } = useContext(GlobalContext)
    let history = useHistory()

    const onSubmit = e => {
        e.preventDefault()
        const articleNew = {
            id: article.length + 1,
            heading,
            subHeading,
            description,
            category,
            author
        }
        createArticle(articleNew)
        history.push('/')
    }
    return (
        <Fragment>
            <Container>
                <h3>Create Article</h3>
                <br />
                <br />
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Article Heading</Form.Label>
                        <Form.Control type="text" id="heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Sub Heading</Form.Label>
                        <Form.Control as="textarea" id="exampleFormControlTextArea1" rows={2} value={subHeading} onChange={(e) => setSubHeading(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Description</Form.Label>
                        <Form.Control as="textarea" id="exampleFormControlTextArea1" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Article Category</Form.Label>
                        <Form.Control type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="formGroupExampleInput">Author Name</Form.Label>
                        <Form.Control type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Link to="/"><Button variant="danger">Cancel</Button></Link>
                </Form>
            </Container>
        </Fragment>
    )
}