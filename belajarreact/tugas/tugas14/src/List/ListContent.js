import React from 'react';
import {List} from 'semantic-ui-react';

const ListContent = (props)=> {
    return(
        <>
        <List.Item>
            <List.Icon name={props.ikon}/>
            <List.Content>
                <a href={props.sourceLink}>{props.konten}</a>
            </List.Content>
        </List.Item>
        </>
    )
}

export default ListContent