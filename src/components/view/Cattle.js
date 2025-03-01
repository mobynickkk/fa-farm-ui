import * as React from 'react';
import {Sheet} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";
import {useEffect, useState} from "react";

export default function Cattle({state, setState, api}) {
    const [animals, setAnimals] = useState(null)
    useEffect(() => {
        async function getData() {
            const res = await api.getAnimals();
            const data = await res.json();
            setAnimals(data);
        }
        getData();
    }, [setAnimals, api]);
    return (<Sheet sx={{display: 'flex', flexDirection: 'column', width: '80vw', alignItems: 'center'}}>
        <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
            <Stack spacing={2} sx={{overflowY: 'auto', height: '87vh'}}>
                {animals && animals.map(animal =>
                    <Element category={animal?.animalCategory?.name}
                             title={animal?.name}
                             place={animal?.corral?.name}
                             createDate={animal?.birthDate}
                             amount="Жив"
                             key={animal?.id}
                             state={state}
                             action="Забить"
                             onAction={async () => {
                                 await api.collectMeat(animal?.id);
                                 setAnimals([]);
                             }}
                             setState={setState}/>)}
            </Stack>
        </Stack>
</Sheet>)
    ;
}
