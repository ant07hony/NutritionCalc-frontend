import { Routes, Route } from 'react-router-dom'
import Nutrition from '../../pages/Nutrition'
import Show from '../../pages/Show'

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path='/' element={< Nutrition />}/>
                <Route path='/nutrition/:id' element={< Show />}/>
            </Routes>
        </main>
    )
    // <h1>Component Name: Main</h1>
  }
  
  export default Main