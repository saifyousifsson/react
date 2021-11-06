import React, {useState} from 'react'
import Card from './Card'

const GardGrid = () => {
  const [products, setProducts] = useState(
    [
    { id:1, title:"Sneekers", text:"Black", imageUrl:"https://images.pexels.com/photos/7869578/pexels-photo-7869578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    { id: 2, title:"sss", text:"jjj", imageUrl:"https://images.pexels.com/photos/7869578/pexels-photo-7869578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    { id: 3, title:"mmm", text:"hhh", imageUrl:"https://images.pexels.com/photos/7869578/pexels-photo-7869578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    { id: 4, title:"rrr", text:"lll", imageUrl:"https://images.pexels.com/photos/7869578/pexels-photo-7869578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}


  ]
  )
    return (
      <div className="row row-cols-1 row-cols-md-4 g-4">
       
       {

         products.map(product =>(
          <div className="col">
            <Card key={product.id} title={product.title} text={product.text} imageUrl={product.imageUrl} />
            </div>
            ))
       }
     
        
    </div>
    )
}

export default GardGrid
