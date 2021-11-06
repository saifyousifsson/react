import React, {useState, useEffect} from 'react'
import ListGroupItem from './ListGroupItem'
const TodoList = () => {
     const [todos, setTodos] = useState([])
     
     useEffect(() =>{
        fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        .then(res => res.json())
        .then(data =>  setTodos(data))
        
        
     },[])
         
    

    return (
        <ul className="list-group my-5 shadow">
        {
           todos.map(item => (<ListGroupItem key={item.id} item={item} />))
        }  
         
         
     </ul>
    )
}

export default TodoList
