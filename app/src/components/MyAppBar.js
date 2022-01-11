
import React from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const MyAppBar = () => {
    return (
        <div>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography 
                    variant="h5"
                    color="inherit">
                        Book
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default MyAppBar