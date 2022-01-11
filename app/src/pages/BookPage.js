import React, {useState, useEffect, useRef} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import TypoGraphy from '@mui/material/Typography'

const axios = require('axios')

const BookPage = () => {
    const {isbn} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("https://openlibrary.org/isbn/"+ isbn + ".json")
            .then((result) => {
                setData(result.data)
            })
            .catch((err) => {
                console.log(err.messages || "API server internal error")
            })
        },[isbn])
    return (
        <div>
            <TypoGraphy 
            variant="h1"
            color="inherit">
                {data?.title}
            </TypoGraphy>
        </div>
    )
}

export default BookPage