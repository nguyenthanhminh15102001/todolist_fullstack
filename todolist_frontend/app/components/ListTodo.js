"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen ,faClock, faTrash} from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { todoListSelector } from '../redux/selector';

export default function ListTodo() {
    const todoList =  useSelector(todoListSelector)


    console.log(todoList);


    return (
        <div className="w-full p-1">
             <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

                <nav aria-label="secondary mailbox folders">
                    <List>
                        {todoList.map(item=> 
                            <ListItem >
                                <ListItemButton >
                                    <FormControlLabel control={<Checkbox />} sx={{ fontSize: 40 }} label= {item.name} className='w-full' />
                                </ListItemButton>
                                <div className='p-2'>
                                    <Button variant="text" className='text-orange-500'><FontAwesomeIcon icon={faClock} className='m-1'/> 28th Jun 2020</Button>
                                </div>
                                <div className='todo-detail flex flex-col justify-end'>
                                    <ListItemIcon className='group_action flex flex-row justify-end'>
                                        <FontAwesomeIcon icon={faPen}  className='group_action__item red'/>
                                        <FontAwesomeIcon icon={faTrash} className='group_action__item blue'/>
                                    </ListItemIcon>
                                    <ListItemText primary="28th Jun 2020" className='text-gray-500' />
                                </div>

                            </ListItem>)}
                    </List>
                </nav>
                </Box>
        </div>
    )
} 