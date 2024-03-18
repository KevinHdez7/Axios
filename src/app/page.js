'use client'

import { useState } from 'react';
import {Stack,TextField,Button, Typography} from '@mui/material'


export default function Home(){

  const [text,setText] = useState('');
  const [messages,setMenssages] = useState([])

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value);
  }
 
  function handeClick(){
    const newMessage ={
      text: text,
      date: new Date(),
      userType: 'user'
    }

    setMenssages([...messages,newMessage])
    setText('')
  }

  return (
    <Stack 
      height="100%"
      justifyContent="center"
      alignItems="center"
      p={2}
  >

    <Stack
      sx= {{
        overflowY: "auto",
        height: "calc(100% - 100px)"
      }}
    width= "100%"
    spacing={2}
    >

      {
        messages.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Stack
          sx = {{
            backgroundColor: "gray",
            borderRadius: "10px",
            flexShrink: 0
          }}

          width="80%"
          alignSelf={item.userType === 'user' ? "end" : "start"}
          height="100px"
        >
          <Typography variant="span" gutterBottom>
            {item.text}
            </Typography>
            <Typography variant="span" gutterBottom>
            {/**mostrar la hora */}
            {item.date.toLocaleTimeString()}
            </Typography>
          </Stack>
        ))
        
      }
      
    
    {/*<Stack
      sx= {{
        backgroundColor: "gray",
        borderRadius: "10px",
        flexShrink: 0
      }}
      width="80%"
      height= "100px"
      >

    </Stack> */}

    </Stack>

    <Stack width="100%" direction="row" spacing={2} flexShrink={0}>
      <TextField
        fullwidth
        value={text}
        id="outlined-basic"
        label="outlined"
        onChange={handleChange}
        variant="outlined"
      />
      <Button onClick={handeClick} variant="contained">contained</Button>
      

    </Stack>

    </Stack>

  );

}

    

         



  