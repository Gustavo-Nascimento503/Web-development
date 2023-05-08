import React,{useState} from 'react'
import '../Componentes/css/style.css'

function Frete(){    
    const[estado,setEstado] = useState('')
    const[userEstado,setUserEstado] = useState('')
    const[frete,setFrete] = useState('')

    function calcularFrete(){
        if(estado === 'SP'){
            return '5,00'
        }
        else if(estado === 'BH'){
            return '10,00'
        }
        else{
            return '0,00'
        }
    }

    function enviarEstado(e){
        e.preventDefault()
        setUserEstado(estado)
        setFrete(calcularFrete())
    }

    function limparEstado(){
        setUserEstado('')
        setFrete('')
     }
     
     return (
      <div className="frete">
      <h2>SELECIONE O ESTADO</h2>
      <select onChange={(e)=>setEstado(e.target.value)}>
        <option value="">Selecione o estado</option>
        <option value="SP">São Paulo</option>
        <option value="BH">Belo Horizonte</option>
      </select>
      <button type="submit" onClick={enviarEstado}>Enviar</button>
      <br/><br/>
      {userEstado && (
        <div>
          <p id="userEstado">Seu estado é: <span>{userEstado}</span></p>
          <p id="frete">O custo de envio é: <span>{frete}</span></p><br/>
          <button onClick={limparEstado}>Limpar campo</button>
        </div>
      )}
    </div>
     )}
export default Frete
    