import * as React from 'react';
import {Sheet} from "@mui/joy";
import Element from "./CreationElement";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Button from "@mui/material/Button";
import {Add} from "@mui/icons-material";
import {useEffect, useState} from "react";

export default function Fields({state, setState, api}) {
    const [fields, setFields] = useState(null)
    useEffect(() => {
        async function getData() {
            const res = await api.getFields();
            const data = await res.json();
            setFields(data);
        }
        getData();
    }, []);
    return (<Sheet sx={{display: 'flex', flexDirection: 'row', width: '80vw', alignItems: 'center',
        justifyContent: 'center'}}>
        <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
            <Stack spacing={2} sx={{overflowY: 'auto', height: '75vh'}}>
                {fields && fields.map(field => <Element category="Поле" title={field.name} action="Засеять" state={state} setState={setState} />)}
            </Stack>
        </Stack>
        <Box
            sx={{
                display: 'flex',
                mb: 1,
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'start', sm: 'start' },
                flexWrap: 'wrap',
            }}
        >
            <Button
                color="primary" onClick={() => {
                    setState({...state, modal: true})
            }}
            >
                <Add /> Добавить
            </Button>
        </Box>
    </Sheet>);
}
