"use client"
import React from "react";
import { Input,Button ,IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar ,faFilter} from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Filter() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className='filter-box  flex items-center justify-end py-5 px-4 pt-0 max-h-40'> 
            <FormControl sx={{ m: 1, minWidth: 120 }}  size="small" className="bg-white">
                    <InputLabel id="demo-simple-select-helper-label">Filter</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value={10}>Completed</MenuItem>
                      <MenuItem value={20}>Active</MenuItem>
                      <MenuItem value={30}>Has due day</MenuItem>
                    </Select>
                   
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}  size="small"  className="bg-white">
                    <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Added date</MenuItem>
                      <MenuItem value={20}>Due date</MenuItem>
                    </Select>
                   
                  </FormControl>
                  <IconButton aria-label="delete" disabled color="primary" className="h-full w-10 flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon icon={faFilter} className="h-full w-5 text-blue-500" />
                  </IconButton>
        </div>
    )
} 