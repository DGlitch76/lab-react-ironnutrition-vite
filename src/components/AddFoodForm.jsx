import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'

// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from 'antd'




function AddFoodForm({ addFood }) {

    //Set STATES - initial form states
    const [name, setName] = useState('How is your food called?');
    const [image, setImage] = useState('place your image URL');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    //     const [newFood, setNewFood] = useState({name, imageUrl, calories, servings})

    // //Submit Handler for Form (onSubmit={handleSubmit})
    const handleSubmit = event => {
        event.preventDefault()
        console.log({name, image, calories, servings})

        // setNewFood (newFood =>{[...newFood, {name, imageUrl, calories, servings}]} )
        addFood(oldArr => {
            return [...oldArr, { name, image, calories, servings }]
        })
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)

    }

    return (

        <div id="AddFoodForm" class="App">

            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <label>Name:<input value={name} onChange={e => setName(e.target.value)} type="text" /></label>
                <label>Image:<input value={image} onChange={e => setImage(e.target.value)} type="text" /></label>
                <label>Calories:<input value={calories} onChange={e => setCalories(e.target.value)} type="number" /></label>
                <label>Servings:<input value={servings} onChange={e => setServings(e.target.value)} type="number" /></label>
                <button type="submit">Add Food</button>
            </form>

        </div>

    )
}

export default AddFoodForm