import * as React from 'react';
import {Sheet} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";

export default function Sell({state, setState}) {
    return (<Sheet sx={{display: 'flex', flexDirection: 'column', width: '80vw', alignItems: 'center'}}>
        <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
            <Stack spacing={2} sx={{overflowY: 'auto', height: '87vh'}}>
                <Element category="Пшеница" title="Первое поле" action="Продать" state={state} setState={setState} />
                <Element category="Рожь" title="Второе поле" action="Продать" state={state} setState={setState} />
                <Element category="Свинья" title="Туша" action="Продать" state={state} setState={setState} />
                <Element category="Свинья" title="Туша" action="Продать" state={state} setState={setState} />
                <Element category="Свинья" title="Туша" action="Продать" state={state} setState={setState} />
                <Element category="Свинья" title="Туша" action="Продать" state={state} setState={setState} />
                <Element category="Свинья" title="Туша" action="Продать" state={state} setState={setState} />
            </Stack>
        </Stack>
    </Sheet>);
}
