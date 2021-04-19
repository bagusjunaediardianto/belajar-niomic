import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form, Button, Header, Label, Input } from 'semantic-ui-react'
import { GlobalContext } from '../../Context/GlobalStates'

export const EditArticle = (route) => {
    let history = useHistory()
    const { article, editArticle } = useContext(GlobalContext)
    const [selectedArticle, setSelectedArticle] = useState({
        id: null,
        articleCode: "",
        articleName: "",
        uom: "",
        category: "",
        supplierCode: "",
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
        history.push('/articles')
    }

    return (
        <Fragment>
            <Container>
                <Header as="h2">
                    Edit Article
            </Header>
                <Form onSubmit={onSubmit}>
                    <Form.Field>
                        <Label>Article Code</Label>
                        <Input type="text" id="articleCode" placeholder="Masukkan Kode Article" value={selectedArticle.articleCode} onChange={e => handleChange("articleCode", e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <Label>Article Name</Label>
                        <Input type="text" id="articleName" placeholder="Masukkan Nama Article" value={selectedArticle.articleName} onChange={e => handleChange("articleName", e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <Label>UOM</Label>
                        <Input type="text" id="uom" placeholder="Masukkan Satuan kemasan" value={selectedArticle.uom} onChange={e => handleChange("uom", e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <Label>Category</Label>
                        <Input type="text" id="category" placeholder="Masukkan Kategori" value={selectedArticle.category} onChange={e => handleChange("category", e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <Label>Supplier Code</Label>
                        <Input type="text" id="supplierCode" placeholder="Masukkan Kode Supplier" value={selectedArticle.supplierCode} onChange={e => handleChange("supplierCode", e.target.value)} />
                    </Form.Field>
                    <Button.Group>
                        <Button type="submit" primary>Submit</Button>
                        <Button.Or />
                        <Link to="/articles">
                            <Button color="red">Cancel</Button>
                        </Link>
                    </Button.Group>
                </Form>
            </Container>
        </Fragment>
    )

}