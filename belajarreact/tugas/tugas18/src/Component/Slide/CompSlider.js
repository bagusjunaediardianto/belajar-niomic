import React, { useState } from 'react';
import {Slider} from 'react-materialize';
import CompSlide from '../Slide/CompSlide';
import listDataSlide from '../../Data/dataSlide';

const CompSlider = ()=> {
    const [dataSlide] = useState(listDataSlide)

    return(
        <>
        <Slider
            fullscreen={false}
            options={{
                duration : 500,
                height   : 300,
                indicators  : true,
                interval    : 6000
            }}
        >
            {dataSlide.map((item, index)=>(
                <CompSlide 
                    key = {index}
                    alt = {item.alt}
                    linkSource = {item.linkSource}
                    tagLine = {item.tagLine}
                    slogan  = {item.slogan}
                />
            ))}
            
        </Slider>
        </>
    )
}
export default CompSlider