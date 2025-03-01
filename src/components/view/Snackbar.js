import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from "@mui/joy/IconButton";
import {Close} from "@mui/icons-material";

export default function Snackbaritto({state, setState}) {
    const open = state.open;
    const setOpen = x => setState({...state, open: x})

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Готово"
                action={action}
            />
        </div>
    );
}