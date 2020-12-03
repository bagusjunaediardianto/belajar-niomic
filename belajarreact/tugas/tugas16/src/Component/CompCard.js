import React from 'react';
import {Col, Card, CardTitle} from 'react-materialize';

const CompCard = (props)=> (
    <>
    <Col s={3} m={3}>
    <Card className="small" header={<CardTitle image={props.cardImage}>{props.cardTitle}</CardTitle>}>
        <p>{props.category} mulai dari <span style={{backgroundColor:'red'}}>Rp {props.harga}rb</span></p> 
    </Card>
    </Col>
    </>
)

export default CompCard