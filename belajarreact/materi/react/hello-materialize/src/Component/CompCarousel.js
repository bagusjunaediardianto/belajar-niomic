import React from 'react';
import {Carousel} from 'react-materialize';

const CompCarousel = ()=> (
    <>
    <Carousel 
        images={[
            'http://lorempixel.com/800/400/food/1/',
            'http://lorempixel.com/800/400/food/2/',
            'http://lorempixel.com/800/400/food/3/',
            'http://lorempixel.com/800/400/food/4/',
            'http://lorempixel.com/800/400/food/5/'
        ]}

        options={{
            fullWidth:true,
            indicators:true
        }}
    />
    </>
)

export default CompCarousel