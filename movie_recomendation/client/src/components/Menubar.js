import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
        main: '#1976d2',
        },
    },
    });

export default function ButtonAppBar() {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="logo" src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/175944081_147533410641973_7512514495715658854_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=l7eXBswCIv4AX_DzjZw&_nc_ht=scontent-lga3-2.xx&oh=00_AT9AIochrGq76vDYDk9CT-XPDvLboh8wubgwmSn6qcmwDA&oe=62670327"/>
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
        </ThemeProvider>
    </Box>
    );
}