import {Link} from 'react-router-dom'
import './Header.css'

const headerImage = "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c="

const Nav = () => (
    <nav className='nav'>
        <Link to='/'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' height='33vmin' alt=''/>
        </Link>
        <h1>Nutrition Calculator</h1>
    </nav>
)
const Header = ({heroImage}) => {
    return (
        <header style={{ minHeight: '33vmin', overflow: 'hidden'}}>
        <Nav/>
        <img style={{width: '100%'}} src= {heroImage || headerImage} alt='group pic'/>
        </header>
    )
    // <h1>Component Name: Header</h1>
  }
  
  export default Header