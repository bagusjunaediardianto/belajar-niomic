import React from 'react'
import {Page} from '../components/Page';
import {useRoutes} from 'hookrouter'
import {A} from 'hookrouter'
import AboutMe from '../components/AboutMe';
import AboutMyCat from '../components/AboutMyCat';
import AboutMyDog from '../components/AboutMyDog';
import { NotFound } from './NotFound';
const routes = {
    '/me': ()=><AboutMe />,
    '/cat': ()=><AboutMyCat />,
    '/dog': ()=><AboutMyDog />,
}

export const About=()=>{
    const match = useRoutes(routes)
    return(
        <Page title="About">
            <div style={{display:"flex",marginBottom:"20px"}}>
                <span style={{marginRight:"20px"}}>
                    <A href="/about/me">About Me</A>
                </span>
                <span style={{marginRight:"20px"}}>
                    <A href="/about/cat">About My Cat</A>
                </span>
                <span style={{marginRight:"20px"}}>
                    <A href="/about/dog">About My Cat</A>
                </span>
            </div>
            {match || <div>Pick A Page</div>}
        </Page>
    )
}
