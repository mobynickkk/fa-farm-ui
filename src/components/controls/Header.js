import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import {Agriculture, Key, Logout, MonetizationOn, Person, Search} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {INITIAL_STATE} from "../../utils/utils";

export default function ColorInversionHeader({user, api, state, setState}) {
    const [balance, setBalance] = useState(null);
    const [logoutHover, setLogoutHover] = useState(false);
    useEffect(() => {
        async function getData() {
            if(!user?.token) {
                setBalance('No balance');
                return;
            }
            const res = await api.getBalance();
            const data = await res.json();
            setBalance(data);
        }
        getData();
    }, [user?.token, api, setBalance]);
    const color = 'primary';
    return (
        <Sheet
            variant="solid"
            color={color}
            sx={[
                {
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                    p: 2,
                    //borderRadius: { xs: 0, sm: 'sm' },
                    minWidth: 'min-content',
                },
                color !== 'warning' &&
                ((theme) => ({
                    background: `linear-gradient(to top, ${theme.vars.palette[color][500]}, ${theme.vars.palette[color][500]})`,
                })),
            ]}
        >
            <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
                <Agriculture />
            </Box>
            <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
                <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
                    <MonetizationOn />
                    <Typography>
                        {balance}
                    </Typography>
                </Box>
                <IconButton variant="soft" sx={{ borderRadius: '50%' }}
                            onMouseEnter={() => setLogoutHover(true)}
                            onMouseLeave={() => setLogoutHover(false)}
                            onClick={() => {
                                localStorage.clear();
                                setState(INITIAL_STATE);
                            }}
                >
                    { user?.token ? (logoutHover ? <Logout /> : <Person />) : <Key /> }
                </IconButton>
            </Box>
        </Sheet>
    );
}