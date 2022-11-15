import { Stack, TextField, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import styled from 'styled-components'
import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { fetchNews } from '../store/actions';
import moment from 'moment';

function Search() {
  const dateOneValue = useRef()
  const dateTwoValue = useRef()
  const inputValue = useRef()
  const dispatch = useDispatch()

  console.log(inputValue)

  const [valueFrom, setValueFrom] = React.useState(dayjs(moment().startOf('month').format('YYYY-MM-DD hh:mm')));
  const [valueTo, setValueTo] = React.useState(dayjs(moment().day(6).format('YYYY-MM-DD hh:mm')));

  const handleChange = (newValue) => {
    setValueFrom(newValue);
  }
  const handleChange2 = (newValue) => {
    setValueTo(newValue);
  }

  function valueHandler() {
    const data = {
      dateOne: dateOneValue.current.value,
      dateTwo: dateTwoValue.current.value,
      input: inputValue.current.value
    }

    dispatch(fetchNews(data))
  } 


  return (
    <Wrapper>
      <div className='input-wrapper'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              inputRef={dateOneValue}
              label="from"
              value={valueFrom}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              inputRef={dateTwoValue}
              label="to"
              value={valueTo}
              onChange={handleChange2}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <TextField inputRef={inputValue} id="outlined-basic" label="Outlined" variant="outlined" />
        <Button onClick={valueHandler} variant="outlined" style={{width: "120px"}}>Search</Button>
      </div>
    </Wrapper>
  )
}

export default Search

const Wrapper = styled.div `
  .input-wrapper {
    display: flex;
    gap: 40px;
    padding: 50px 100px;
    flex-wrap: wrap;

    .calendar-wrapper {
      display: flex;
      gap: 40px;

    }

    @media(max-width: 800px){
      gap: 20px;
    }
    
    @media(max-width: 400px) {
      padding: 20px;
    }
  }
`