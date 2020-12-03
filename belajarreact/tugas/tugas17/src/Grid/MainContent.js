import React from 'react';
import {Row, Col, Slider, SideNav, SideNavItem, Button} from 'react-materialize';
import CompSlider from '../Component/CompSlider';
import CompCard from '../Component/CompCard';
import CompSideNavHeader from '../Component/CompSideNavHeader';
import CompSideNavSubHeader from '../Component/CompSideNavSubHeader';
import listDataSlide from '../Data/dataSlide';
import listDataCard from '../Data/dataCard';
import listDataSideNav from '../Data/dataSideNavHeader';
import listDataSubNav from '../Data/dataSideNavSubHeader';
const MainContent = ()=> {
    return(
    <>
    <Row>
        <Col>
        <SideNav
            trigger={<Button>SIDE NAV DEMO</Button>}
            options={{
                closeOnClick : true,
            }}
        >
            <SideNavItem userView
                user={{
                    background  : "https://media-cdn.tripadvisor.com/media/photo-s/09/5c/4d/fc/domino-s-pizza-montana.jpg",
                    image       : "data:image/jpeg;base64,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",
                    name        : "Harneet Rajpal Singh",
                    email       : "rajpal_singh@gmail.com"
                }}
            />
            <SideNavItem divider/>
            {listDataSideNav.map((item,index)=>(
                <CompSideNavHeader 
                    key={index}
                    icon={item.icon}
                    nameLink={item.nameLink}
                />
            ))}
            <SideNavItem divider/>
            <SideNavItem subheader>Product</SideNavItem>
            {listDataSubNav.map((item,index)=>(
                <CompSideNavSubHeader 
                    key={index}
                    kategori={item.kategori}
                />
            ))}
        </SideNav>
        </Col>
    </Row>
    <Row>
        <Col s={12} m={12}>
            <Slider
                fullscreen={false}
                options={{
                    duration:500,
                    height:350,
                    indicators:true,
                    interval:6000
                }}
            >
            {listDataSlide.map((item, index)=>(
                <CompSlider 
                    key={index}
                    alt={item.alt}
                    link={item.link}
                    placing={item.link}
                    tagline={item.tagline}
                    slogan={item.slogan}
                />
            ))}
            </Slider>
        </Col>
    </Row>
    <Row>
        {listDataCard.map((item, index)=>(
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
export default MainContent