import * as React from 'react';
import {useState} from 'react';
import {Sheet, Tab, tabClasses, TabList, Tabs} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";
import CreationElement from "./CreationElement";

export default function Crop({state, setState}) {
    const [tab, setTab] = useState(0);
    return (<Sheet sx={{display: 'flex', flexDirection: 'column', width: '80vw', alignItems: 'center'}}>
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}
              onChange={(event, value) => setTab(value)}>
            <TabList
                tabFlex={1}
                size="sm"
                sx={{
                    pl: { xs: 0, md: 4 },
                    justifyContent: 'left',
                    [`&& .${tabClasses.root}`]: {
                        fontWeight: '600',
                        flex: 'initial',
                        color: 'text.tertiary',
                        [`&.${tabClasses.selected}`]: {
                            bgcolor: 'transparent',
                            color: 'text.primary',
                            '&::after': {
                                height: '2px',
                                bgcolor: 'primary.500',
                            },
                        },
                    },
                }}
            >
                <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
                    Выращивание
                </Tab>
                <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
                    Закупка
                </Tab>
            </TabList>
            {tab === 0
                ? <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
                    <Stack spacing={2}>
                        <Element category="Пшеница" title="Первое поле" state={state} setState={setState} />
                        <Element category="Рожь" title="Второе поле"  state={state} setState={setState} />
                    </Stack>
                </Stack>
                : <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
                    <Stack spacing={2}>
                        <CreationElement category="Закупка" title="Закупка пшеницы" state={state} setState={setState} />
                        <CreationElement category="Закупка" title="Закупка ржи" state={state} setState={setState} />
                    </Stack>
                </Stack>
            }
        </Tabs>
    </Sheet>);
}
