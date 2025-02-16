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

export default function BasicModal({state, setState}) {
    const open = state.modal;
    const setOpen = x => setState({...state, modal: x})
    const modalData = state?.modalData;
    const [data, setData] = useState({subject: modalData.subject, amount: 0});
    const handleClose = () => setOpen(false);

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
                                native
                                value={data?.subject}
                                onChange={(event, value) => setData({...data, subject: value})}
                                input={<OutlinedInput label="Предмет покупки" id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                <option value={"field"}>Поле</option>
                                <option value={"corral"}>Загон</option>
                            </Select>
                        </FormControl>
                        {modalData?.resource && (
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel htmlFor="dialog-sup">Предмет покупки</InputLabel>
                                <Select fullWidth
                                        variant='outlined'
                                        native
                                        value={data?.subject}
                                        onChange={(event, value) => setData({...data, subject: value})}
                                        input={<OutlinedInput label="Предмет покупки" id="dialog-sup" />}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={"pig"}>Свинья</option>
                                    <option value={"cow"}>Корова</option>
                                </Select>
                            </FormControl>
                        )}
                        <FormControl>
                            <TextField id="outlined-basic" label="Количество" variant="outlined" defaultValue="1" />
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}