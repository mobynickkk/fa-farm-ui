import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import {
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select, TextField
} from "@mui/material";

import Button from "@mui/material/Button";

export default function BasicModal({state, setState, api}) {
    const open = state.modal;
    const setOpen = x => setState({...state, modal: x})
    const [subj, setSubj] = useState('');
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    console.log(name)
    const handleClose = () => {
        setOpen(false);
        setSubj('');
        setName('');
        setPlace('');
    }
    return (
        <div>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose} sx={{width: '500'}}>
                <DialogTitle>Оформите покупку</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="demo-dialog-native">Предмет покупки</InputLabel>
                            <Select fullWidth
                                variant='outlined'
                                value={subj}
                                onChange={(event, value) => {
                                    setSubj(value.props.value);
                                }}
                                input={<OutlinedInput label="Предмет покупки" id="demo-dialog-native" />}
                            >
                                <MenuItem value="field">Поле</MenuItem>
                                <MenuItem value="corral">Загон</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField id="name" label="Название" variant="outlined" placeholder="Ёмкость живой плоти"
                                       value={name} onChange={event => setName(event.target.value)} />
                        </FormControl>
                        <FormControl>
                            <TextField id="place" label="Местоположение" variant="outlined" placeholder="Москва"
                                       value={place} onChange={event => setPlace(event.target.value)} />
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={async () => {
                        const dto = {name: name, place: place};
                        console.log(dto)
                        if (subj === 'field') {
                            await api.addField(dto)
                        } else if (subj === 'corral') {
                            await api.addCorral(dto)
                        }
                        handleClose();
                    }}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}