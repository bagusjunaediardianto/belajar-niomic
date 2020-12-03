import React from 'react';
import {Row, Col, Slider} from 'react-materialize';
import CompSlider from '../Component/CompSlider';
import CompCard from '../Component/CompCard';
import listdata from '../Data/dataSlide';
import listdataCard from '../Data/dataCard';
const GridContent = ()=> {
    return(
    <>
    <Row>
        <Col s={12} m={12}>
            <Slider
            fullscreen={false}
            options={{
            duration:500,
                height:300,
                indicators:true,
                interval:6000
            }}
    >
                {listdata.map((item,index)=>(
                <CompSlider 
                key={index}
                alt={item.alt}
                link={item.link}
                placement={item.placement}
                tagline={item.tagline}
                slogan={item.slogan}
                />
            ))}
            </Slider>
        </Col>
    </Row>
    <Row>
        <div>
        <p>Hot List</p>
        </div>
        {listdataCard.map((item,index)=>(
            <CompCard 
                key={index}
                cardImage={item.cardImage}
                cardTitle={item.cardTitle}
                category={item.category}
                harga={item.harga}
            />
        ))}
    </Row>
    </>
)
}
export default GridContent