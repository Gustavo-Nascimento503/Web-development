import logo from './';
import './App.css';
import Home from './componentes/home';
import Livros from './componentes/livros';
import Foter from './componentes/footer';

export default function App() {
  const ti = "Biblioteca geek"
  const estoque = ['The witcher o ultimo desejo', 'Outliers', 'Assassins creed renascença', 'Star wars na escuridão', 'Interestelar', 'Guerra civil']
  const nome = "By: Gustavo Santos Nascimento 2023"

  return (
    <div>
      <Home ti={ti} />
      <Livros estoque={estoque} />
      <Foter nome={nome} />
    </div>
    
  );
}


