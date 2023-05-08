import {Link} from 'react-router-dom'
import '../index.css'
import '../Componentes/css/style.css'

function Nav(){

    return (
        <div id="menu-nav">
          <nav id='navegador'>
            <h1>
                <Link to="/">Esporte Universo</Link>
            </h1>

            <ul>
                <li>
                    <Link to="/Camisetas">Camisetas</Link>
                </li>
                <li>
                    <Link to="/Calçados">Calçados</Link>
                </li>
                <li>
                    <Link to="/Frete">Frete</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}
export default Nav