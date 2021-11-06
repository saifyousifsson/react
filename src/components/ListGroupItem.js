import React from 'react'

function ListGroupItem({item}) {
    return (
        <div className= "list-group-item container align-items-center" >
            
        <li className="list-group-item" >{item.id} </li>
        <li className="list-group-item" >{item.firstName} </li>
        <li className="list-group-item" > {item.lastName} </li>
        <li className="list-group-item" >{item.email}</li>
        

        </div>
    )}

export default ListGroupItem
