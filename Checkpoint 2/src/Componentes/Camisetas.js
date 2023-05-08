import '../Componentes/css/style.css'
import c1 from './imgC/camiseta1.webp';
import c2 from './imgC/camiseta2.webp';
import c3 from './imgC/camiseta3.webp';
import c4 from './imgC/camiseta4.webp';
import c5 from './imgC/camiseta5.webp';
import c6 from './imgC/camiseta6.webp';

function Camisetas(){

    return (
        <>
        <main>
            <div className="camisetas">
                <div className="camiseta">
                    <img src={c1} alt="Camiseta Adidas" />
                    <p>Camiseta Adidas</p>
                    <spam>R$ 74,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="camiseta">
                    <img src={c2} alt="Camiseta Esportiva tênis" />
                    <p>Camiseta Esportiva tênis</p>
                    <spam>R$ 89,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="camiseta">
                    <img src={c3} alt="Camiseta esportiva Penalty" />
                    <p>Camiseta esportiva Penalty</p>
                    <spam>R$ 100,00</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="camiseta">
                    <img src={c4} alt="Camiseta Adidas estro 15" />
                    <p>Camiseta Adidas estro 15</p>
                    <spam>R$ 64,50</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="camiseta">
                    <img src={c5} alt="Camiseta térmica" />
                    <p>Camiseta térmica</p>
                    <spam>R$ 49,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="camiseta">
                    <img src={c5} alt="Camiseta esportiva com recortes" />
                    <p>Camiseta esportiva com recortes</p>
                    <spam>R$ 55,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

            </div>
        </main>
        </>
    )
}
export default Camisetas