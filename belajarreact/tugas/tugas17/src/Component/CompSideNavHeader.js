import React from 'react';
import {SideNavItem, Icon} from 'react-materialize';

const CompSideNavHeader = (props)=> {    
    return(
    <>
    <SideNavItem href="/" icon={<Icon>{props.icon}</Icon>}>{props.nameLink}</SideNavItem>
    </>
    )
}

export default CompSideNavHeader