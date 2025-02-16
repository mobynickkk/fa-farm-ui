import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import {Agriculture, Key, Person, Search} from "@mui/icons-material";

export default function ColorInversionHeader({user}) {
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
                <Input
                    placeholder="Поиск"
                    variant="soft"
                    size="sm"
                    endDecorator={
                        <Search />
                    }
                    sx={{
                        '--Input-paddingInline': '12px',
                        width: 160,
                        display: { xs: 'none', lg: 'flex' },
                    }}
                />
                <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
                    { user ? <Person /> : <Key /> }
                </IconButton>
            </Box>
        </Sheet>
    );
}