"use client"
import React from "react";
import Filter from "../components/Filter";
import Form from "../components/Form";
import ListTodo from "../components/ListTodo";

export default function Todolist() {
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
          setAge(event.target.value);
        };
  return (
    <main className="flex bg-white dark:bg-black min-h-screen flex-col  justify-center items-center p-24">
       <div  className='container flex items-center justify-center  place-content-center '>
            <div className='w-2/3 min-h-min bg-slate-50 text-black rounded-lg '> 
              <div className='Title-box flex items-center justify-center p-10'>
                <h1 className='text-5xl font-bold  text-green-400'>My Todolist</h1>
              </div>
              <div className='content-box my-4 py-4 px-7 '>
                  <Form/>
                  <div class="h-px my-4 bg-gray-200 border-0 "></div>
                  <Filter/>
                 <div className='todo-box'> 
                    <ListTodo/>
                 </div>
              </div>
             </div>
       </div>
    </main>
  )
}





