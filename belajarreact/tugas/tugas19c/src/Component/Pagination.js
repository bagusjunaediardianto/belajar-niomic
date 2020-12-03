import React from 'react';
import '../style.css';
import {Menu, Dropdown, Grid} from 'semantic-ui-react';

const Pagination = ({postPerPage, totalPosts, paginate})=> {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPosts / postPerPage);i++){
        pageNumbers.push(i)
    }
    return(  
        <div style={{float:"right"}}>
            <Grid columns={1}>
                <Grid.Column width={1}>
                <Menu compact>
                    <Dropdown text="Cari Halaman" pointing multiple selection>
                        <Dropdown.Menu>
                        {pageNumbers.map(item=>(
                            <Dropdown.Item
                                key={item}
                                onClick={()=>paginate(item)}
                            >
                                {item}
                            </Dropdown.Item>
                        ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    </Menu>
                </Grid.Column>
                </Grid>
        {/* <Menu floated="right">
            {pageNumbers.map((item)=>(
                <Menu.Item 
                    key={item}
                    onClick={()=>paginate(item)}
                >
                    {item}
                </Menu.Item>
            ))}
        </Menu> */}
        </div>       
    )
}

export default Pagination