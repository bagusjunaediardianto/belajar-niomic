import React from 'react';
import {Form, Modal, Button} from 'react-bootstrap';

const ModalForm =({
    getShow,handleClose,
    seteditFalseAnimation,
    dataPosts,inputChange,
    onSubmitForm,
    showDataJabatan, showDataGender})=> {
    return(
        <Modal 
            show={getShow}
            onHide={handleClose}
            animation={seteditFalseAnimation}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Nama Karyawan</Form.Label>
                    <Form.Control 
                        type="text"
                        name="nama_karyawan"
                        value={dataPosts.nama_karyawan || ''} 
                        placeholder="nama anda"
                        onChange={inputChange} />
                    </Form.Group>
                    
                    <Form.Group>
                    <Form.Label>jabatan</Form.Label>
                    <Form.Control 
                        as="select"
                        name="jabatan"
                        value={dataPosts.jabatan || ''}
                        onChange={inputChange}
                    >
                    {showDataJabatan.map(index=>(
                        <option key={index}>
                            {index}
                        </option>
                    ))}
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control 
                        as="select"
                        name="jenis_kelamin"
                        value={dataPosts.jenis_kelamin || ''}
                        onChange={inputChange}
                    >
                    {showDataGender.map(index=>(
                        <option key={index}>
                            {index}
                        </option>
                    ))}
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control 
                        type="date"
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        value={dataPosts.tanggal_lahir || ''}
                        name="tanggal_lahir"
                        placeholder="Tanggal Lahir" 
                        onChange={inputChange}
                    />
                </Form.Group>
                    
            </Form>
            </Modal.Body>   
            <Modal.Footer>
                <Button type="submit" variant="primary" onClick={onSubmitForm}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm