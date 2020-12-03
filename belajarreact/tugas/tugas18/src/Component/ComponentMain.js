import React, { useState } from 'react';
import CompCard from './Card/CompCard';
import listDataCard from '../Data/dataCard';
import { Row, Col, Pagination, Icon } from 'react-materialize';
import CompSlider from './Slide/CompSlider';
import SideNavMain from '../Component/SideNav/SideNavMain';
const ComponentMain = ()=> {
    const [dataCard] = useState(listDataCard)
    return(
        <>
        <Row>
            <Col>
                <SideNavMain/>
            </Col>
        </Row>
        <Row>
            <Col s={12} m={12}>
                <CompSlider />                
            </Col>
        </Row>
        <Row>
            {dataCard.map((item, index)=>(
                <CompCard 
                    key ={index}
                    imageCard ={item.imageCard}
                    titleCard ={item.titleCard}
                    kategori  ={item.kategori}
                    harga ={item.harga} 
                />
            ))}
        </Row>
        <Row>
            <Col>
                <Pagination 
                    activePage={2}
                    items={8}
                    leftBtn={<Icon>chevron_left</Icon>}
                    rightBtn={<Icon>chevron_right</Icon>}
                />
            </Col>
        </Row>
        </>
    )
}

export default ComponentMain