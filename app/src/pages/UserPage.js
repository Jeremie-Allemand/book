import React, {useState, useEffect, useRef} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {Typography, Grid, Box, Stack, IconButton, Card, TextField,InputAdornment } from '@mui/material/'
import BookList from "../components/BookList";
import AddIcon from '@mui/icons-material/Add';

const axios = require('axios')

const UserPage = (props) => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [newListName, setNewListName] = useState("")

    useEffect(() => {
        axios
            .get("http://localhost:8080/alllist/" + id)
            .then((result) => {
                setData(result.data)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
    },[id])
    
    const addList = () => {
        axios
            .post("http://localhost:8080/newlist/",{
                name: newListName,
            })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
    }


    return (
        <Stack direction="column" spacing={2}>
            <Typography variant="h1" align="center">
                Jeremie
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {data.map((list, index) => (
                        <BookList key={index} content={list ?? null}/>
                    ))}
                    <Grid item xs={2}>
                        <Card>
                            <IconButton>
                                <AddIcon/>
                            </IconButton>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
    
}

export default UserPage