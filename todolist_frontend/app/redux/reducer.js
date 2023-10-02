

const initState =  {
    Filter: {
        search:'',
        status:'All',
        priority:[]
    },
    todoList:[
         {id : 1 , name:"Learn JavaScript" ,completed: false }
    ]

    ,
}

const rootReducer = (state = initState , action )=>{
    console.log(state ,action.type );
switch (action.type) {
    case 'todoList/addTodo':
        
        return {
            ...state ,
            todoList: [
                ...state.todoList,
                action.payload
            ],
        }


    default:
        return state;
}

}  


export default rootReducer;