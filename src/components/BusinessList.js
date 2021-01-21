import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'



const BusinessList = (props) => {
    return (
        <div>
            <Container maxWidth="lg" className="list-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Address</TableCell>
                            {props.isLoggedIn ? 
                            <TableCell>Delete</TableCell>
                            : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.businesses.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell style={{ textDecoration: "underline" }}>
                                <Link to={`/details/${item.id}`}>{item.name}</Link>
                            </TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.hours}</TableCell>
                            <TableCell>{item.address}</TableCell>
                            {props.isLoggedIn ?
                            <TableCell>
                            <DeleteIcon
                                onClick={ () => props.removeBusiness(item.id)}
                                className="icon text-red" />
                            </TableCell>
                            : null}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    )
}

export default BusinessList