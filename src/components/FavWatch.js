import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


// id,title,toUSD,image_url,email
class FavWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frData: [],
            selectedItem: {},
            showModel: false
        }
    }
    updateFav = (e) => {
        e.preventDefault();
        const ParsToUSD = parseInt(e.target.frToUSD.value);
        const reqBody = {
            id: e.target.frId.value,
            title: e.targer.frTitle.value,
            description: e.targer.frDescription.value,
            image_url: e.target.frImage.value,
            email: this.props.auth0.user.email
        }
        axios.put(`${process.env.REACT_APP_URL}/fav/${this.state.selectedItem._id}`, reqBody).then(updateData => {
            const updateFavData = this.state.frData.map(fav => {
                if (fav._id === this.state.selectedItem._id) {
                    fav = updateData.data;
                    return fav;
                }
                return fav;
            })
            this.setState({ frData: updateFavData })
            this.handelDispalyUpdateModel();
        })
    }
    deleteFav = (itemId) => {
        axios.delete(`${process.env.REACT_APP_URL}/fav${itemId}`).then(deletedFav => {
            if (deletedFav.data.deletedCount === 1) {
                const newFavs = this.state.frData.filter(fav => fav._id == itemId)
                this.setState({ frData: newFavs })
            }
        })
    }

    handelDispalyUpdateModel = async (item) => {
        await this.setState({
            selectedItem: item,
            showModel: !this.state.showModel
        })
    }


    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_URL}/fav?email=${this.props.auth0.user.email}`).then(resData => {
            this.setState({ frData: resData.data })
        })
    }



    render() {
        return (
            <>
                {
                    this.state.showModel &&
                    <Update
                        selectedItem={this.setState.selectedItem}
                        showModel={this.setState.showModel}
                        handelDispalyUpdateModel={this.handelDispalyUpdateModel}
                        updateFav={this.updateFav}


                    />

                }
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image_url} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.handelDispalyUpdateModel(item)}>UpDate</Button>
                        <Button variant="danger" onClick={() => this.deleteFav(item._id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default withAuth0(FavWatch)
