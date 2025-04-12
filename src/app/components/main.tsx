import React, { useContext, useState } from 'react';
import { ExtensionContext } from '../context/context';
import { Box, Typography, Avatar, Button, Switch } from '@mui/material';
import { Grid, Stack } from '@mui/system';

import initialData from '../../data/data.json'; // Import the static JSON file

interface MainProps {
  MyTab: React.ComponentType<{ children: React.ReactNode; value: number; index: number }>;
  value: number;
}

const Main: React.FC<MainProps> = ({ MyTab, value }) => {
  const [data, setData] = useState(initialData); 
  const [active, setActive] = useState<string[]>([]);
  const { darkMode } = useContext(ExtensionContext);

  const handleActive = (name: string) => {
    if (active.includes(name)) {
      setActive(active.filter((item) => item !== name)); 
    } else {
      setActive([...active, name]);
    }

    setData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isActive: !active.includes(name) } : item
      )
    );
  };

  const handleRemove = (name: string) => {
    setData((prevData) => prevData.filter((item) => item.name !== name)); 
    setActive((prevActive) => prevActive.filter((activeName) => activeName !== name));
  };
  
  return (
    <Box>
      <MyTab value={value} index={0}>
        <Grid spacing={3} container>
          {data.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{
                display: 'flex',
                minHeight: '180px',
                minWidth: '300px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '10px',
                border: '1px solid transparent',
                backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)',
                borderRadius: '20px',
                flexGrow: 1,
              }}
            >
              <Stack
                direction={'row'}
                sx={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <Avatar src= {item.logo} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '14px',
                        md: '17px',
                      },
                      color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    color="grey"
                    sx={{
                      fontSize: {
                        xs: '11px',
                        md: '14px',
                      },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction={'row'}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                    onClick={() => handleRemove(item.name)} 
                  sx={{
                    fontSize: {
                      xs: '11px',
                      md: '13px',
                    },
                    color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
                    background: darkMode ? '#1E1E2F' : '#F4F4F4',
                    textTransform: 'none',
                    borderRadius: '15px',
                    minHeight: 'auto',
                    minWidth: 'auto',
                    padding: '2px 10px',
                  }}
                >
                  Remove
                </Button>
                <Switch
                  size="small"
                  checked={active.includes(item.name)} // Check if the item is active
                  onChange={() => handleActive(item.name)} // Toggle the active state
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </MyTab>
      <MyTab value={value} index={1}>
        <Grid spacing={3} container>
          {data
            .filter((item) => active.includes(item.name)) 
            .map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, }}
                key={index}
                sx={{
                  display: 'flex',
                  minHeight: '180px',
                  minWidth: '300px',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '10px',
                  border: '1px solid transparent',
                  backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)',
                  borderRadius: '20px',
                }}
              >
                <Stack
                  direction={'row'}
                  sx={{
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Avatar />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '14px',
                          md: '17px',
                        },
                        color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      color="grey"
                      sx={{
                        fontSize: {
                          xs: '11px',
                          md: '14px',
                        },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                direction={'row'}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                onClick={() => handleRemove(item.name)}
                  sx={{
                    fontSize: {
                      xs: '11px',
                      md: '13px',
                    },
                    color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
                    background: darkMode ? '#1E1E2F' : '#F4F4F4',
                    textTransform: 'none',
                    borderRadius: '15px',
                    minHeight: 'auto',
                    minWidth: 'auto',
                    padding: '2px 10px',
                  }}
                >
                  Remove
                </Button>
                <Switch
                  size="small"
                  checked={active.includes(item.name)} 
                  onChange={() => handleActive(item.name)}
                />
              </Stack>
              </Grid>
            ))}
        </Grid>
      </MyTab>
      <MyTab value={value} index={2}>
      <Grid spacing={3} container>
          {data
            .filter((item) => !active.includes(item.name)) // Filter only active items
            .map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                sx={{
                  display: 'flex',
                  minHeight: '180px',
                  minWidth: '300px',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '10px',
                  border: '1px solid transparent',
                  backgroundColor: darkMode ? 'hsl(225, 23%, 24%)' : 'hsl(200, 60%, 99%)',
                  borderRadius: '20px',
                }}
              >
                <Stack
                  direction={'row'}
                  sx={{
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Avatar />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '14px',
                          md: '17px',
                        },
                        color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      color="grey"
                      sx={{
                        fontSize: {
                          xs: '11px',
                          md: '14px',
                        },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                direction={'row'}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  onClick={() => handleRemove(item.name)}
                  sx={{
                    fontSize: {
                      xs: '11px',
                      md: '13px',
                    },
                    color: darkMode ? 'white' : 'hsl(227, 75%, 14%)',
                    background: darkMode ? '#1E1E2F' : '#F4F4F4',
                    textTransform: 'none',
                    borderRadius: '15px',
                    minHeight: 'auto',
                    minWidth: 'auto',
                    padding: '2px 10px',
                  }}
                >
                  Remove
                </Button>
                <Switch
                  size="small"
                  checked={active.includes(item.name)} 
                  onChange={() => handleActive(item.name)}
                />
              </Stack>
              </Grid>
            ))}
        </Grid>
      </MyTab>
    </Box>
  );
};

export default Main;