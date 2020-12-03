import React from 'react';
import {Slide, Caption} from 'react-materialize';

const CompSlider = (props)=> (
    <>
    <Slide image={<img alt={props.alt} src={props.link} />}>
        <Caption placement={props.placement}>
            <br />
            <br />
            <br />
            <h3>
                {props.tagline}
            </h3>
            <h5 className="light grey-text text-lighten-3">
                {props.slogan}
            </h5>
        </Caption>
    </Slide>
    </>
)

export default CompSlider