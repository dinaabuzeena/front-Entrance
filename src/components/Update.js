import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


export class Update extends Component {
    render() {
        return (
            <>
               <Modal show={this.props.showModel}  onHide={this.props. handelDispalyUpdateModel} >
  <Modal.Header closeButton>
    <Modal.Title> UpData</Modal.Title>
    
  </Modal.Header>

  <Modal.Body>
    
  // id,title,toUSD,image_url,email
  <Form onSubmit={this.props.updateFav} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" name="frTitel"  defaultValue={this.props.selectedItem.title} />
     </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>toUSD</Form.Label>
    <Form.Control type="text" name="frToUSD"  defaultValue={this.props.selectedItem.toUSD} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>image_url</Form.Label>
    <Form.Control type="text" name="frImage"  defaultValue={this.props.selectedItem.image_url} />
     </Form.Group>


  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>



  </Modal.Body>
</Modal> 
            </>
        )
    }
}

export default Update
