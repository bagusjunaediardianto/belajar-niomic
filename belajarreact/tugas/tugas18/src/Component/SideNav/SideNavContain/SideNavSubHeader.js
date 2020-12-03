import React from 'react';
import {SideNavItem} from 'react-materialize';

const SideNavSubHeader = (props)=> (
    <>
    <SideNavItem
        href="/"
        waves
    >
        {props.kategori}      
    </SideNavItem> 
    </>
)

export default SideNavSubHeader