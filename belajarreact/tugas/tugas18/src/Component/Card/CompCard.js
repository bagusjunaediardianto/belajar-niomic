import React from 'react';
import {Card, CardTitle, Col} from 'react-materialize';

const CompCard = (props)=>(
    <>
    <Col s={3} m={3} >
    <Card
        className="small"
        header={<CardTitle image={props.imageCard}><span className="black-text text-darken-3">{props.titleCard}</span></CardTitle>}
    >
        <p>{props.kategori} mulai dari <span className="red">Rp. {props.harga}rb</span></p>
    </Card>
    </Col>
    </>
)

export default CompCard