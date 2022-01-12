
import React, { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';

const axios = require('axios')

const Book = (props) => {
    const [bookData, setBookData] = useState([])
    const [authorData, setAuthorData] = useState([])

    useEffect(() => {
        axios
            .get("https://openlibrary.org/isbn/" + props.isbn+ ".json")
            .then((result) => {
                setBookData(result.data)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
        }
    ,[props.isbn])


    useEffect(() => {
        if(bookData.authors){
            axios
                .get("https://openlibrary.org" + bookData.authors[0]?.key + ".json")
                .then((result) => {
                    setAuthorData(result.data)
                })
                .catch((err) => {
                    console.log(err.message || "API server internal error")
                })
            }
        }
    ,[bookData.authors])
    
    
    const goToBook = () =>{
        window.open("https://openlibrary.org" + bookData?.key)
    }

    if(authorData){
        return (
            <ListItem secondaryAction={
                <IconButton onClick={goToBook}>
                    <BookIcon/> 
                </IconButton>
            }>
                <ListItemText primary={bookData?.title} secondary={authorData?.name} />
            </ListItem>
        )
    }
}
export default Book