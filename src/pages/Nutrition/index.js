import { useState, useEffect } from 'react'
import './Nutrition.css'


const Nutrition = (props) => {
    
    const [ isLoading, setIsLoading] = useState(true)
    const [ ingredient, setIngredient ] = useState([])

    const BASE_URL = 'http://localhost:4000/nutrition'

    const getIngredient = async () => {
        try {
            const response = await fetch(BASE_URL)
            console.log(response)
            const allIngredients = await response.json()
            console.log(allIngredients)
            setIngredient(allIngredients)
            setIsLoading(false)
        } catch (err){
            console.log(err)
        }
    }

    useEffect( () => {getIngredient()}, [])

    console.log(`There are ${ingredient.length} ingredients available to render`)

    const loaded = () => {
        return ingredient?.map((ingredient) => {
            return (
                <div key={ingredient._id}>
                    <h1>{ingredient.description}</h1>
                    <h3>ingredients</h3>
                </div>
            )
        })
    }

    const loading = () => {
        <div className='ingredient-list'>
            <h1>loading...
                <span>
                    <img className='spinner' src='https://freesvg.org/img/1544764567.png' alt=''/>{''}
                </span>
            </h1>
        </div>

    }

    return (
        <section className='ingredient-list'>
        { isLoading ? loaded() : loading()}
        </section>       
  )
}

export default Nutrition