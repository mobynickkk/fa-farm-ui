import * as React from 'react';
import {Sheet} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export default function Buy({state, setState, api}) {
    const [categories, setCategories] = useState(null)
    useEffect(() => {
        async function getData() {
            const res1 = await api.getCrops();
            const data1 = await res1.json();
            const res2 = await api.getAnimalCategories();
            const data2 = await res2.json();
            setCategories([
                ...data1.map(x => {return {...x, type: 'sowing'}}),
                ...data2.map(x => {return {...x, type: 'animal'}})]);
        }
        getData();
    }, [api, setCategories]);
    return (<Sheet sx={{display: 'flex', flexDirection: 'column', width: '80vw', alignItems: 'center'}}>
        <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
            <Stack spacing={2} sx={{overflowY: 'auto', height: '87vh'}}>
                {categories ? categories.map(category =>
                        <Element category={category.type === 'sowing' ? 'Семена' : 'Животное'}
                                 title={category.name}
                                 key={category.id}
                                 amount={'1 ' + category.type === 'sowing' ? 'тонна' : 'животное'}
                                 place="Рынок"
                                 createDate="--.--.----"
                                 action="Купить"
                                 onAction={async () => {
                                     await api.buy({
                                         category: category.name,
                                         type: category.type,
                                         amount: 1,
                                         unit: category.type === 'sowing' ? 'TON' : 'UNIT'});
                                     setCategories([]);
                                 }}
                                 state={state}
                                 setState={setState} />)
                    : <Typography>Нет предметов для покупки</Typography>}
            </Stack>
        </Stack>
    </Sheet>);
}
