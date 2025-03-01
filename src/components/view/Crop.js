import * as React from 'react';
import {useEffect, useState} from 'react';
import {Sheet} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";

export default function Crop({state, setState, api}) {
    const [sowings, setSowings] = useState(null)
    useEffect(() => {
        async function getData() {
            const res = await api.getSowings();
            const data = await res.json();
            setSowings(data);
        }
        getData();
    }, []);
    return (<Sheet sx={{display: 'flex', flexDirection: 'column', width: '80vw', alignItems: 'center'}}>
            <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
                <Stack spacing={2} sx={{overflowY: 'auto', height: '87vh'}}>
                    {sowings && sowings.map(sowing =>
                        <Element category="Посев"
                                 key={sowing?.id}
                                 title={sowing?.crop?.name}
                                 createDate={sowing?.sowingDate}
                                 place={sowing?.field?.name}
                                 amount={sowing?.amount?.amount + ' ' + sowing?.amount?.unit}
                                 state={state}
                                 onAction={async () => {
                                     await api.collectGrain(sowing?.id);
                                     setSowings([]);
                                 }}
                                 setState={setState}/>)}
                </Stack>
            </Stack>
    </Sheet>);
}
