import '../styles/header.css'
import logo from '../Assets/Buld#1.png'
const Header = () => {
    return ( 
        <div className='header'>
            <div className='logo'>
            <img className='logo-icon' src={logo} alt="logo" />
            <h2>Sensory</h2>
            </div>
            
           <div className='btn'>
            <button>Contribute to this Service</button>
           </div>
        </div>
     );
}
 
export default Header;