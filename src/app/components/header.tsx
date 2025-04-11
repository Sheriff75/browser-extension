import React from "react";
import { Box, Stack, IconButton, Avatar, Typography } from "@mui/material";
import { ExtensionContext } from "../context/context";

const Header = () => {
    const {darkMode, setDarkMode} = React.useContext(ExtensionContext)
    const logo: string = './globe.svg'
    const moon: string = './icon-moon.svg'
    const sun: string = './icon-sun.svg'
  return (
      <Box
      sx={{
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '20px',
        paddingY: '10px',
        border: '1px solid transparent',
        backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)',
      }}
      >
       <Stack direction="row" spacing={2} alignItems="center">
        <Avatar alt="logo" src={logo} sx={{
            width: {xs: 20, md: 30},
            height: {xs: 20, md: 30},
        }} />
        <Typography sx={{
            fontSize: {xs: '14px', md :'21px'},
            fontWeight: 700,   
            color: darkMode ? 'white' : 'hsl(227, 75%, 14%)'    
        }}>Extensions</Typography>
       </Stack>
       <IconButton>
        <Avatar  src={darkMode ? sun : moon} alt="toggle dark mode" onClick={() => setDarkMode(!darkMode)} style={{width: '20px', height: '20px'}}/>
       </IconButton>
    </Box>
    ) 
};

export default Header;
