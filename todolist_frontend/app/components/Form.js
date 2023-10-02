
"use client"
import React ,{useState}from "react";
import { Input,Button ,IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar ,faFilter} from '@fortawesome/free-solid-svg-icons'


export default function Form() {
    const [todoValue, setTodoValue]=useState('');
    console.log(todoValue);
    const handleSubmit=(e)=>{
        console.log("todoValue",todoValue);
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
          type="submit"
          className="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded text-lg"
        >
          Add
        </Button>
        </div>
      </div>
      </form>
    )
} 