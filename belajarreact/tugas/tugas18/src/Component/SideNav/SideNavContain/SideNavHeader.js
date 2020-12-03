import React from 'react';
import {SideNavItem, Icon} from 'react-materialize';

const SideNavHeader = (props)=> (
    <>
    <SideNavItem 
        href="/"
        icon={<Icon>{props.icon}</Icon>}
    >
        {props.nameLink}
    </SideNavItem>
    </>
)

export default SideNavHeader