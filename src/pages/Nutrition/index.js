import { useState, useEffect } from 'react'
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

    return (
          <h1>Nutrition Component</h1>
  )
}

export default Nutrition