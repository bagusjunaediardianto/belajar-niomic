import React from 'react';
import {Slide, Caption} from 'react-materialize';

const CompSlide = (props)=> (
    <>
    <Slide image={<img alt={props.alt} src={props.linkSource}/>}>
    <Caption placement={props.placing}>
        <h3>
            {props.tagLine}
        </h3>
        <h5>
            {props.slogan}
        </h5>
    </Caption>
    </Slide>
    </>
)

export default CompSlide