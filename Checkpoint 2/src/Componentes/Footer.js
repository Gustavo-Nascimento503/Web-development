import '../Componentes/css/style.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'


function Footer(){

    return (

        <footer>
            <ul className='rsocial'>
                <li>
                   <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
            </ul>

        Copy@2023
        
        </footer>
    
    )
}
export default Footer