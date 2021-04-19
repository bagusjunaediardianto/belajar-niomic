import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form, Button, Header, Label, Input } from 'semantic-ui-react'
import { GlobalContext } from '../../Context/GlobalStates'

export const CreateArticle = () => {
    const [articleCode, setArticleCode] = useState("")
    const [articleName, setArticleName] = useState("")
    const [uom, setUom] = useState("")
    const [category, setCategory] = useState("")
    const [supplierCode, setSupplierCode] = useState("")
    const { createArticle, article } = useContext(GlobalContext)
    let history = useHistory()

    const onSubmit = e => {
        e.preventDefault()
        const articleNew = {
            id: article + 1,
            articleCode,
            articleName,
            uom,
            category,
            supplierCode,
        }
        createArticle(articleNew)
        history.push("/articles")
    }

    return (
        <Container>
            <Header as="h2">
                Create Article
            </Header>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <Label>Article Code</Label>
                    <Input type="text" placeholder="Masukkan Kode Article" value={articleCode} onChange={e => setArticleCode(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Label>Article Name</Label>
                    <Input type="text" placeholder="Masukkan Nama Article" value={articleName} onChange={e => setArticleName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Label>UOM</Label>
                    <Input type="text" placeholder="Masukkan Satuan kemasan" value={uom} onChange={e => setUom(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Label>Category</Label>
                    <Input type="text" placeholder="Masukkan Kategori" value={category} onChange={e => setCategory(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Label>Supplier Code</Label>
                    <Input type="text" placeholder="Masukkan Kode Supplier" value={supplierCode} onChange={e => setSupplierCode(e.target.value)} />
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
    )

}