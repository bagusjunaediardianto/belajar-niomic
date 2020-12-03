import React from 'react';
import {SideNavItem} from 'react-materialize';

const CompSideNavSubHeader = (props)=> (
    <>
    <SideNavItem 
        href="/"
        waves
    >
        {props.kategori}
    </SideNavItem>
    </>
)

export default CompSideNavSubHeader