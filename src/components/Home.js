import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

 class Home extends Component {
     constructor(props){
         super(props);
         this.state={
             all:[]
         }
     }

addToFva=(item)=>{
    const reqBody={
        id: item.id,
        title: item.title,
        description:item.description,
        image_url: item.image_url,
        email: this.props.auth0.user.email 
    }
    axios.post(`${process.env.REACT_APP_URL}/fav`,reqBody)
}
componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_URL}allData`).then(resData=>{
        this.setState({all:resData.data})
    })
}


    render() {
        return (
            <>
               {
                   this.state.all.map(item=>{
                       return(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image_url} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                          {item.description}
                          </Card.Text>
                          <Button variant="primary" onClick={()=>this.addToFva(item)}>UpDate</Button>
                          
                        </Card.Body>
                      </Card>
                       )
                   })
               } 
            </>
        )
    }
}

export default withAuth0 (Home)
