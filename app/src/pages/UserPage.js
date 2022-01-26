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
    const [isUpdated, setIsUpdated] = useState(true)
    const [newListName, setNewListName] = useState("")

    useEffect(() => {
        axios
            .get("http://localhost:8080/alllist/" + id)
            .then((result) => {
                setData(result.data)
                setIsUpdated(true)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
    },[id,isUpdated])
    
    const addList = () => {
        setNewListName("")
        axios
            .post("http://localhost:8080/createlist/",{
                name: newListName,
                creatorId:id
            })
            .then((response) => {
                console.log(response)
                setIsUpdated(false)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
    }

    const handleChange = (event) =>{
        setNewListName(event.target.value)
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
                            <Stack alignItems="center">
                                <TextField 
                                id="standard-basic" 
                                variant="standard"
                                value={newListName} 
                                onChange={handleChange}
                                />
                                <IconButton onClick={addList}>
                                    <AddIcon/>
                                </IconButton>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
    
}

export default UserPage