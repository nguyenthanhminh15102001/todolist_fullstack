
"use client"
import React ,{useState}from "react";
import { Input,Button ,IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar ,faFilter} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
import uuid from 'react-uuid'
export default function Form() {
    const dispatch =  useDispatch();
   
    const [todoValue, setTodoValue]=useState('');


    const handleSubmit=(e)=>{
        dispatch(addTodo({
          name:todoValue,
          completed:false,
          id:uuid(),
        }))
    }
    return (
      <form className='form-group custom-form' onSubmit={handleSubmit}>
        <div className='input-wrapper flex items-center justify-center h-32 py-5 px-4  shadow bg-white rounded-lg'> 
        <div className="input-box w-full  flex relative flex items-center justify-center h-12">
        <Input
          placeholder="Add Todo"
          className="pr-20 h-full bg-none outline-none border-none shadow-none  text-2xl"
          containerProps={{
            className: "min-w-0 h-full bg-none outline-none border-none shadow-none",
          }}
          value={todoValue}
          onChange={(e)=>setTodoValue(e.target.value)}
        />
        <Button
          size="sm"
          color={"blue-gray"}
          
          className="h-full bg-none outline-none border-none shadow-none"
        >
          <FontAwesomeIcon icon={faCalendar} className="h-full text-blue-500" />
        </Button>
        <Button
          size="sm"
          color={"blue-gray"}
          onClick={handleSubmit}
          className="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded text-lg"
        >
          Add
        </Button>
        </div>
      </div>
      </form>
    )
} 