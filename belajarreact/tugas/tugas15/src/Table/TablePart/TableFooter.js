import React from 'react';
import {Table, Menu, Icon} from 'semantic-ui-react';


const TableFooter = ()=>{
    
    const halaman = [1,2,3,4]
    return(
        <>
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan={3}>
                    <Menu floated="right" pagination>
                        <Menu.Item as="a" icon>
                            <Icon name="chevron left" />
                        </Menu.Item>
                            {halaman.map((item,index)=> {
                                return(
                                    <>
                                    <Menu.Item as="a">{item}</Menu.Item>
                                    </>
                                )
                            })}
                        <Menu.Item as="a" icon>
                            <Icon name="chevron right" />
                        </Menu.Item>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
        </>
    )
}

export default TableFooter