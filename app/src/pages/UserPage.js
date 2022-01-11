import React, {useState, useEffect, useRef} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {TypoGraphy, Grid, Box} from '@mui/material/'
import BookList from "../components/BookList";

const axios = require('axios')

const UserPage = (props) => {
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/alllist/" + id)
            .then((result) => {
                setData(result.data)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
        }
    ,[id])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {data.map((list, index) => (
                    <BookList key={index} content={list ?? null}/>
                ))}
            </Grid>
        </Box>
    )
}

export default UserPage 