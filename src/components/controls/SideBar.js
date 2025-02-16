import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Sheet from '@mui/joy/Sheet';
import {Fence, Grass, Pets, Window} from "@mui/icons-material";

export default function SideBar({state, setState}) {
    const [color, setColor] = React.useState('neutral');
    const tab = state.tab;
    const setTab = x => setState({...state, tab: x});
    return (
        <Box sx={{ display: 'flex', overflow: 'auto', height: '90.8vh' }}>
            <Sheet
                variant="solid"
                invertedColors
                sx={[
                    { p: 2 },
                    color !== 'neutral' && {
                        bgcolor: `${color}.700`,
                    },
                ]}
            >
                <List
                    sx={{
                        '--ListItem-radius': '8px',
                        '--List-gap': '4px',
                        flexGrow: 0,
                        minWidth: 200,
                    }}
                >
                    <ListItemButton selected={tab === 0} onClick={() => setTab(0)}>
                        <ListItemDecorator>
                            <Grass />
                        </ListItemDecorator>
                        Посевы
                    </ListItemButton>
                    <ListItemButton selected={tab === 1} onClick={() => setTab(1)}>
                        <ListItemDecorator>
                            <Pets />
                        </ListItemDecorator>
                        Скот
                    </ListItemButton>
                    <ListItemButton selected={tab === 2} onClick={() => setTab(2)}>
                        <ListItemDecorator>
                            <Window />
                        </ListItemDecorator>
                        Поля
                    </ListItemButton>
                    <ListItemButton selected={tab === 3} onClick={() => setTab(3)}>
                        <ListItemDecorator>
                            <Fence />
                        </ListItemDecorator>
                        Загоны
                    </ListItemButton>
                    <ListItem nested>
                        <ListSubheader>Рынок</ListSubheader>
                        <List>
                            <ListItemButton selected={tab === 4} onClick={() => setTab(4)}>Продажа</ListItemButton>
                        </List>
                    </ListItem>
                </List>
            </Sheet>
        </Box>
    );
}