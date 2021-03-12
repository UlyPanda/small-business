import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Container, TextField, Button } from '@material-ui/core';

const addBusiness = (props) => {
    const [id, setId] = useState(0)
    const [newBusiness, setNewBusiness] = useState({})
    let history = useHistory();

    const handleTextChange = (e) => {
        setId(uuid)
        setNewBusiness({ ...newBusiness, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const business = {id, ...newBusiness}
        props.addBusiness(business);
        history.push("./BusinessList");
    };

    return(
        <Container maxWidth="md">
            <form className="add-form" onSubmit={handleSubmit}>
                <TextField
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={newBusiness.name}
                    onChange={handleTextChange}
                />
                <TextField
                    placeholder="Address"
                    type="text"
                    name="address"
                    value={newBusiness.address}
                    onChange={handleTextChange}
                />
                <TextField
                    placeholder="Hours"
                    type="text"
                    name="hours"
                    value={newBusiness.hours}
                    onChange={handleTextChange}
                />
                <TextField
                    placeholder="Description"
                    type="text"
                    name="description"
                    value={newBusiness.description}
                    onChange={handleTextChange}
                />
                <br/>
                <Button variant="contained" color="secondary" type="submit">Submit</Button>
            </form>
        </Container>
    )
}