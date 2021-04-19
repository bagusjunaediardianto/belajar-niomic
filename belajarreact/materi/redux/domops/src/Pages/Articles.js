import React, { useState } from 'react';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import Page from '../Component/Page';
import sourceDataArticles from '../Data/sourceDataArticles'
const Articles = () => {
    const [dataSource, setDataSource] = useState(sourceDataArticles)
    const pageNumbers = []
    const totalPosts = dataSource.length + 1
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(5)

    for (let i = 1; i < Math.ceil((totalPosts / postPerPage)); i++) {
        pageNumbers.push(
            <Menu.Item
                as="a"
                key={i}
                active={i === currentPage}
                onClick={() => paginate(i)}>
                {i}
            </Menu.Item>
        )
    }

    // mendapatkan post saat ini
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = dataSource.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <Page>
            <Table selectable size="small" padded color="blue" inverted style={{ fontWeight: "bolder", fontSize: "14px" }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Code
                    </Table.HeaderCell>
                        <Table.HeaderCell>
                            Name Of Articles
                    </Table.HeaderCell>
                        <Table.HeaderCell>
                            UOM
                    </Table.HeaderCell>
                        <Table.HeaderCell>
                            Actions
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {currentPosts.map((item, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{item.articleCode}</Table.Cell>
                                <Table.Cell>{item.articleName}</Table.Cell>
                                <Table.Cell>{item.uom}</Table.Cell>
                                <Table.Cell>
                                    <Button.Group>
                                        <Button icon><Icon name="edit outline" /></Button>
                                        <Button.Or />
                                        <Button negative icon><Icon name="delete" /></Button>
                                    </Button.Group>
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                    )}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="4">
                            <Menu floated="right" pagination size="large">
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                {pageNumbers}
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Page>
    )
}

export default Articles