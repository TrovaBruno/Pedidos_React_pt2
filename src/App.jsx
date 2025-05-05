import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from './Feedback';
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
  const textoOK = "Já chegou"
 const textoNOK = "Ainda não chegou"
 const funcaoOK = () => alert ("Agradecemos a confirmação!")
 const funcaoNOK = () => alert ("Verificaremos o ocorrido!")
const componenteFeedback = <Feedback textoOK={textoOK} funcaoOK={funcaoOK} 
textoNOK={textoNOK} funcaoNOK={funcaoNOK}/>;
  return (
    <div className="container border rounded mt-2">
      {/* linha para o título */}
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
      
      {/* Primeiro pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
        <Cartao cabecalho="22/04/2021">
 <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400
- SATA"/>
  {componenteFeedback}
 </Cartao>
        </div>
      </div>

      {/* Segundo pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
        <Cartao cabecalho="20/04/2021">
 <Pedido icone="fas fa-book fa-2x" titulo="Livro" descricao="Concrete 
Mathematics - Donald Knuth" />
  {componenteFeedback}
 </Cartao>
        </div>
      </div>

      {/* Terceiro pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
        <Cartao cabecalho="21/01/2021">
 <Pedido icone="fas fa-laptop fa-2x" titulo="Notebook" descricao="Notebook 
Dell - 8Gb - i5" />
  {componenteFeedback}
 </Cartao>

        </div>
      </div>
    </div>
  );
};

export default App;
