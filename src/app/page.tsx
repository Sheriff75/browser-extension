'use client'

import React, {useContext, useState} from 'react'
import Header from './components/header'
import Main from './components/main'
import {Box, Typography, Tabs, Tab} from '@mui/material'
import { Container } from '@mui/system'
import { ExtensionContext } from './context/context'
interface TabProps {
  children? : React.ReactNode;
  index: number;
  value: number;
}
function MyTab({children, index, value}: TabProps) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box sx={{
          display: 'flex', 
          gap: '10px',
        }}>
          {children}
        </Box> 
      )}
    </div>
  );
} 


function AllyProps (index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
const Home = () => {
  const [value, setValue] = useState(0)
  const {darkMode} = useContext(ExtensionContext)

const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue)
}

  return (
    <Box sx={{paddingX: {md: '120px', sm: '40px', xs: '20px'},
     paddingY: '20px',
     background:  darkMode ? `linear-gradient(180deg, #040918 0%, #091540 100%)` : `linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`,
     color: darkMode ? 'white' : 'black',
     minHeight: '100vh',
     display: 'flex',
     flexDirection : 'column',
     gap: '20px',
     }}>
      <Header />
      <Container
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
      }}
      >
        <Typography
        sx={{
          fontSize: {xs: '15px', md :'23px'},
          fontWeight: 700,   
          color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
        }}
        >
          Extension Lists
        </Typography>
        <Tabs value={value} 
        onChange={handleTabChange} aria-label="basic tabs example" 
        TabIndicatorProps={{
          sx: {
            display: 'none',
          },
        }}
        sx={{
          marginTop: {sm: '8px'}
        }}
        >
          <Tab
          sx={{
           fontSize : {
            xs: '11px',
            md: '14px'
          },
          textTransform: 'Capitalize',
          color: darkMode ? 'white' : 'black',
          padding: '8px 15px', 
          minHeight: 'auto', 
          minWidth: 'auto',
          border: '1px solid grey',
          borderRadius: '45px',
          backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)',
          marginRight: '7px'
        }}
          {...AllyProps(0)} label="All" />
          <Tab
           sx={{
            fontSize : {
             xs: '11px',
             md: '14px'
           },
           textTransform: 'Capitalize',
          color: darkMode ? 'white' : 'black',
          padding: '8px 15px', 
          minHeight: 'auto', 
          minWidth: 'auto',
          border: '1px solid grey',
          borderRadius: '45px',
          backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)',
          marginRight: '7px'

         }}
          {...AllyProps(1)} label="Active" />
          <Tab
           sx={{
            fontSize : {
             xs: '11px',
             md: '14px'
           },
           textTransform: 'Capitalize',
           color: darkMode ? 'white' : 'black',
           padding: '8px 15px', 
          minHeight: 'auto', 
          minWidth: 'auto',
          border: '1px solid grey',
          borderRadius: '45px',
          backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)'
         }}
          {...AllyProps(2)} label="Inactive" />
        </Tabs>
      </Container>
      <Main MyTab = {MyTab} value={value}  />
    </Box>
  )
}

export default Home
