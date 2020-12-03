import React, {Component} from 'react';
import { Popover, OverlayTrigger, Button, Collapse } from 'react-bootstrap';

class SetOverlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            buka : true
        }
        this.handleCollapse=this.handleCollapse.bind(this)
    }

    handleCollapse(){
        this.setState({
            buka : !this.state.buka
        })
    }
    render(){
    const munculPopover1 = 
    <Popover id="popover-basic" title="Informasi Website">
        <Popover.Title as="h3">Informasi Website</Popover.Title>
        <Popover.Content>
            Website ini dibuat untuk memudahkan
            dalam pencarian informasi terkini
            tentang berita olahraga
        </Popover.Content>
    </Popover>    
    return (
        <div style={{display:"flex"}}>
        <div>
            <OverlayTrigger trigger="click" placement="right" overlay={munculPopover1}>
                <Button variant="primary">Informasi</Button>
            </OverlayTrigger>
        </div>
        <div style={{marginLeft:"5px"}}>
        <Button variant="primary" onClick={this.handleCollapse}>Versi Website</Button>
        <Collapse in={this.state.buka}>
            <p>Akses Sport V1.0</p>
        </Collapse>
        </div>
        </div>
        )
}
}
export default SetOverlay

