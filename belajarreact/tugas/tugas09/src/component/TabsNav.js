import React from 'react'
import Tables from './Tables';
import Paging from './Paging';
import SetOverlay from './SetOverlay';
import {Tabs, Tab} from 'react-bootstrap';

const TabsNav = ()=> {
    return (
        <div>
            <h4>Rumor Transfer Pemain</h4>
            <br/>
        <Tabs defaultActiveKey="semuaTransfer">
            <Tab eventKey="semuaTransfer" title="Semua Transfer">
            <Tables />
            </Tab>
            <Tab eventKey="ligaprimer" title="Liga Primer Inggris"></Tab>
            <Tab eventKey="serieA" title="Serie A"></Tab>
            <Tab eventKey="divisiPrimera" title="Divisi Primera"></Tab>
            <Tab eventKey="bundesLiga" title="Bundes Liga"></Tab>
            <Tab eventKey="ligaIndonesia" title="Liga 1 Indonesia"></Tab>
        </Tabs>
        <Paging />
        <SetOverlay />
        </div>
    )
}

export default TabsNav