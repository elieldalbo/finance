// cSpell:Ignore obtem

import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {

  useEffect (() => {
    obtemDados()
  },[])

  const [dolar, setDolar] = useState([])
  const [euro, setEuro] = useState([])
  const [bitcoin, setBitcoin] = useState([])


  async function obtemDados(){
    let url = `http://economia.awesomeapi.com.br/json/all`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setDolar(data.USD)
      setEuro(data.EUR)
      setBitcoin(data.BTC)
    })
    .catch(function (error){
      console.error(`Houve um erro: ${error}`)
    })
  }

  return (
    <div className="App">
        <h1>Finance Quotation</h1>
        <table border="1">
        <thead>
          <tr>
            <th>Variação</th>
            <th>Valor Compra</th>
            <th>Moeda</th>
            <th>Mínimo</th>
            <th>Máximo</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{`${dolar.pctChange} %`}</td>
          <td>{`R$ ${dolar.bid}`}</td>
          <td>{`${dolar.name}`}</td>
          <td><p><small>{`R$ ${dolar.low}`}</small></p></td>
          <td>{`R$ ${dolar.high}`}</td>
        </tr>
        <tr>
          <td>{`${euro.pctChange} %`}</td>
          <td>{`R$ ${euro.bid}`}</td>
          <td>{euro.name}</td>
          <td>{`R$ ${euro.low}`}</td>
          <td>{`R$ ${euro.high}`}</td>
        </tr>
        <tr>
          <td>{`${bitcoin.pctChange} %`}</td>
          <td>{`R$ ${bitcoin.bid}`}</td>
          <td>{bitcoin.name}</td>
          <td>{`R$ ${bitcoin.low}`}</td>
          <td>{`R$ ${bitcoin.high}`}</td>
        </tr>
        </tbody>
        </table>
        <span class="align-baseline">
          <h4>{`${dolar.name}`}</h4>
          <p>{`${dolar.pctChange} %`}</p>
          <p>{`R$ ${dolar.bid}`}</p>        
          <p><small>{`Min. R$ ${dolar.low} / Max. R$ ${dolar.high}`}</small></p>
        </span>
        <span class="align-middle">
          <h4>{`${euro.name}`}</h4>
          <p>{`${euro.pctChange} %`}</p>
          <p>{`R$ ${euro.bid}`}</p>        
          <p><small>{`Min. R$ ${euro.low} / Max. R$ ${euro.high}`}</small></p>
        </span>
    </div>
  );
}
