import '../Componentes/css/style.css'
import ca1 from './imgCalcados/calcado1.webp';
import ca2 from './imgCalcados/calcado2.webp';
import ca3 from './imgCalcados/calcado3.webp';
import ca4 from './imgCalcados/calcado4.webp';
import ca5 from './imgCalcados/calcado5.webp';
import ca6 from './imgCalcados/calcado6.webp';

function Calçados(){
    return (
        <>
        <main>
            <div className="calcados">
                <div className="calcado">
                    <img src={ca1} alt="Camiseta Adidas" />
                    <p>Tênis kolosh esportivo feminino</p>
                    <spam>R$ 74,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={ca2} alt="Camiseta Esportiva tênis" />
                    <p>Tênis esportivo masculino olympicus</p>
                    <spam>R$ 89,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={ca3} alt="Camiseta esportiva Penalty" />
                    <p>Tênis esportivo nike revolution</p>
                    <spam>R$ 100,00</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={ca4} alt="Camiseta Adidas estro 15" />
                    <p>Tênis esportivo Everlast</p>
                    <spam>R$ 64,50</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={ca5} alt="Camiseta térmica" />
                    <p>T~enis esportivo bouts</p>
                    <spam>R$ 49,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={ca6} alt="Camiseta esportiva com recortes" />
                    <p>Tênis nike downshifter 9 esportivo</p>
                    <spam>R$ 55,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

            </div>
        </main>
        </>
    )
}
export default Calçados