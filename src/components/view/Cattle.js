import * as React from 'react';
import {useState} from 'react';
import {Sheet, Tab, tabClasses, TabList, Tabs} from "@mui/joy";
import Element from "./Element";
import Stack from "@mui/joy/Stack";
import CreationElement from "./CreationElement";

export default function Cattle({state, setState, api}) {
    api.getHerds().then(r => r.text()).then(j => console.log(j))
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
                    Наличный скот
                </Tab>
                <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
                    Разведение
                </Tab>
            </TabList>
            {tab === 0
                ? <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
                    <Stack spacing={2}>
                        <Element category="Свинья" title="Олег" state={state} setState={setState} />
                        <Element category="Корова" title="Катя" state={state} setState={setState} />
                    </Stack>
                  </Stack>
                : <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
                    <Stack spacing={2}>
                        <CreationElement category="Закупка" title="Закупка свиньи" state={state} setState={setState} />
                        <CreationElement category="Закупка" title="Закупка коровы" state={state} setState={setState} />
                    </Stack>
                </Stack>
            }
        </Tabs>
    </Sheet>);
}
