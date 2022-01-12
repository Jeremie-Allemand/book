import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Book from './Book'
import {List, Card, Typography, Grid,IconButton, Stack} from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';

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

	const goToEdit = () => {
		
	} 

	if(listData){
		console.log(listData)
		return (
			<Grid item xs={2}>
				<Card>
					<Stack>
						<Typography align="center">{props.content.name}</Typography>
						<List>
							{listData.map((item,index) => (
								<Book isbn={item.isbn} key={index}/>
							))}
						</List>
						<IconButton onClick={goToEdit}>
							<EditIcon/> 
						</IconButton>
					</Stack>
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