import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Book from './Book'
import {List, Card, Typography, Grid} from '@mui/material/';

const axios = require('axios')

const BookList = (props) => {
    const [listData, setListData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/allbook/" + props.content.id_list)
            .then((result) => {
                setListData(result.data)
            })
            .catch((err) => {
                console.log(err.message || "API server internal error")
            })
        }
    ,[props.content.id_list])

    

    if(listData){
        console.log(listData)
        return (
            <Grid item xs={2}>
                <Card>
                    <Typography align="center">{props.content.name}</Typography>
                    <List>
                        {listData.map((item,index) => (
                            <Book isbn={item.isbn} key={index}/>
                        ))}
                    </List>
                </Card>
            </Grid>
                            
        )
    }else{
        return(
            <>
            </>
        )
    }
}
export default BookList