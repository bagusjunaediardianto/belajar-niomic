import React from 'react';
import {Menu, Search} from 'semantic-ui-react';

const TableMenu = ()=> {
    return(
        <>
        <Menu.Menu position="right">
            <Search placeholder="search document" size="mini" style={{float:"right"}} />
        </Menu.Menu>
        </>
    )
}

export default TableMenu