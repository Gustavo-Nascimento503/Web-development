import React from 'react'
import '../Componentes/css/style.css'
import c7 from './imgC/camiseta7.jpg';
import c8 from './imgC/camiseta8.jpg';
import c9 from './imgC/camiseta9.jpg';

function Home(){
     
     return (
        <main>
            <h1>Bem vindo  a nossa loja</h1>
            <h2>Ultimas peças</h2>
            <div className="home">
                <div className="calcado">
                    <img src={c7} alt="Camiseta Adidas" />
                    <p>Tênis kolosh esportivo feminino</p>
                    <p>Ultimas peças</p>
                    <spam>R$ 74,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={c8} alt="Camiseta Esportiva tênis" />
                    <p>Tênis esportivo masculino olympicus</p>
                    <p>Ultimas peças</p>
                    <spam>R$ 89,90</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                <div className="calcado">
                <img src={c9} alt="Camiseta esportiva Penalty" />
                    <p>Tênis esportivo nike revolution</p>
                    <p>Ultimas peças</p>
                    <spam>R$ 100,00</spam>
                    <button className='comprar'>Comprar</button>
                </div>

                

                
            </div>

            
        </main>
        
     )
}
export default Home
    