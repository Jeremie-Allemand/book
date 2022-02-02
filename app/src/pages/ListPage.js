import React, { useState, useEffect, useRef } from "react";
import {useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {List, Card, Typography, Grid,IconButton, Stack, TextField} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import BookEditItem from "../components/BookEditItem";


const axios = require('axios')

const ListPage = () => {
    const [listData, setListData] = useState([])
    const [newBookIsbn,setNewBookIsbn] = useState("")
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
    
    const handleChange = (event) =>{
        setNewBookIsbn(event.target.value)
    }

    const addBook = () => {

        setNewBookIsbn("")
        axios
            .post("http://localhost:8080/addbook/",{
                isbn: newBookIsbn,
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
                <Stack alignItems="center" spacing={2}>
                    {listData.map((item,index) => (
                        <BookEditItem isbn={item.isbn} key={index}/>
                    ))}

                    <Stack alignItems="center">
                        <TextField 
                        id="standard-basic" 
                        variant="standard"
                        value={newBookIsbn} 
                        onChange={handleChange}
                        />
                        <IconButton onClick={addBook}>
                            <AddIcon/>
                        </IconButton>
                    </Stack>
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