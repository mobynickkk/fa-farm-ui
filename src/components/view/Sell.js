import * as React from 'react';
import {Sheet} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export default function Sell({state, setState, api}) {
    const [commodities, setCommodities] = useState(null)
    useEffect(() => {
        async function getData() {
            const res = await api.getAllCommodities();
            const data = await res.json();
            setCommodities(data);
        }
        getData();
    }, [api, setCommodities]);
    return (<Sheet sx={{display: 'flex', flexDirection: 'column', width: '80vw', alignItems: 'center'}}>
        <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
            <Stack spacing={2} sx={{overflowY: 'auto', height: '87vh'}}>
                {commodities ? commodities.map(commodity =>
                    <Element category={commodity.type === 'animal' ? 'Мясо' : 'Растительные продукты'}
                             title={commodity.category}
                             key={commodity.id}
                             amount={commodity.amount + ' ' + commodity.unit}
                             place="Склад"
                             createDate={commodity.price}
                             action="Продать"
                             onAction={async () => {
                                 await api.sell(commodity);
                                 setCommodities([]);
                             }}
                             state={state}
                             setState={setState} />)
                    : <Typography>Нет предметов для продажи</Typography>}
            </Stack>
        </Stack>
    </Sheet>);
}
