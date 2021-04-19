import React, { useContext } from 'react'
import { Container, Button, Table, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalStates'

export const ListArticle = () => {
    const { article, deleteArticle, editArticle } = useContext(GlobalContext)

    return (
        <Segment.Group>
            <Segment raised>
                <Button
                    as={Link}
                    to={"/articles/create"}
                    primary
                    fluid
                    mobile={16}
                >
                    Create New Article
            </Button>
            </Segment>
            <Segment>
                {article.length > 0 ? (
                    <Table singleLine striped computer={5} tablet={8} mobile={16}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Article Code</Table.HeaderCell>
                                <Table.HeaderCell>Article Name</Table.HeaderCell>
                                <Table.HeaderCell>UOM</Table.HeaderCell>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                                <Table.HeaderCell>Supplier Code</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {article.map(article => (
                                <Table.Row key={article.id}>
                                    <Table.Cell>{article.articleCode}</Table.Cell>
                                    <Table.Cell>{article.articleName}</Table.Cell>
                                    <Table.Cell>{article.uom}</Table.Cell>
                                    <Table.Cell>{article.category}</Table.Cell>
                                    <Table.Cell>{article.supplierCode}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button.Group>
                                            <Button
                                                secondary
                                                as={Link}
                                                to={`/articles/detail/${article.id}`}
                                            >
                                                Detail
                                            </Button>
                                            <Button.Or />
                                            <Button
                                                primary
                                                as={Link}
                                                to={`/articles/edit/${article.id}`}
                                                onClick={() => editArticle(article.id)}
                                            >
                                                Edit
                                            </Button>
                                            <Button.Or />
                                            <Button color="red"
                                                onClick={() => deleteArticle(article.id)}
                                            >
                                                Hapus
                                            </Button>
                                        </Button.Group>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                ) : (
                    <Container text>
                        <Header as="h2">Article</Header>
                        <p>Anda tidak memiliki data apapun</p>
                    </Container>
                )}
            </Segment>
        </Segment.Group>
    )
}
