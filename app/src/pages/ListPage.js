import React, { useState, useEffect, useRef } from "react";
import {useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {List, Card, Typography, Grid,IconButton, Stack} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';

const axios = require('axios')

const ListPage = () => {
    const [listData, setListData] = useState([])
    const [newBookName,setNewBookName] = useState("")
    const [isUpdated, setIsUpdated] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        axios
            .get("http://localhost:8080/allbook/" + id)
            .then((result) => {
                setListData(result.data)
                setIsUpdated(true)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
        }
    ,[id,isUpdated])
    
    const addBook = () => {

        setNewBookName("")
        axios
            .post("http://localhost:8080/addbook/",{
                isbn: 9782253056141,
                listId:id
            })
            .then((response) => {
                console.log(response)
                setIsUpdated(false)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
        
    }

    if(listData){
        console.log(listData)
        return (
                <Stack alignItems="center">
                        {listData.map((item,index) => (
                            <Typography>
                                {item.isbn}
                            </Typography>
                        ))}
                        <IconButton onClick={addBook}>
                            <AddIcon/>
                        </IconButton>
                </Stack>
        )
    }else{
        return(
            <>
            </>
        )
    }
}
export default ListPage