import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyAppBar from "../components/MyAppBar";
import SearchBar from "material-ui-search-bar";
const Main = () => {
    const [field, setField] = useState('')
    let navigate = useNavigate()

    const goToBook = (field) => {
        navigate("/book/" + field)
    }

    return (
        <div>

            <MyAppBar/>
            <div>
                <SearchBar
                    value={field}
                    onChange={(newValue) => setField(newValue)}
                    onRequestSearch={() => goToBook(field)}/>
            </div>
        </div>
    )
}
export default Main