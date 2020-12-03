import React from 'react';
import {Card, Col, CardTitle} from 'react-materialize';

const CompCard = (props)=>(
    <>
        <Col s={3} m={3}>
            <Card 
                className="small grey" 
                header={<CardTitle image={props.cardImage}><span className="white-text text-darken-3">{props.cardTitle}</span></CardTitle>}
            >
                <br/><p>{props.category} mulai dari <span style={{backgroundColor:"red"}}>Rp {props.harga}rb</span></p>
            </Card>
        </Col>
    </>
)

export default CompCard