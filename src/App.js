// cSpell:Ignore obtem

import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {

  useEffect (() => {
    obtemDados()
  },[])

  const [dolar, setDolar] = useState([])
  const [euro, setEuro] = useState([])
  const [libra, setLibra] = useState([])
  const [peso, setPeso] = useState([])
  const [iene, setIene] = useState([])
  const [franco, setFranco] = useState([])
  const [bitcoin, setBitcoin] = useState([])
  const [litecoin, setLitecoin] = useState([])
  const [etherium, setEtherium] = useState([])

  async function obtemDados(){
    let url = `http://economia.awesomeapi.com.br/json/all`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setDolar(data.USD)
      setEuro(data.EUR)
      setLibra(data.GBP)
      setPeso(data.ARS)
      setIene(data.JPY)
      setFranco(data.CHF)
      setBitcoin(data.BTC)
      setLitecoin(data.LTC)
      setEtherium(data.ETH)
    })
    .catch(function (error){
      console.error(`Houve um erro: ${error}`)
    })
  }

  return (
    <div className="App">
        <h1>Finance Quotation</h1>
        <div class="linha">
          <div class="coluna-33">
              <span class="align-baseline">
                <h4>{`${dolar.name}`}</h4>
                <p>{`${dolar.pctChange} %`}</p>
                <p>{`R$ ${dolar.bid}`}</p>        
                <p><small>{`Min. R$ ${dolar.low} / Max. R$ ${dolar.high}`}</small></p>
            </span>
          </div>
          <div class="coluna-33">
            <span>
              <h4>{`${euro.name}`}</h4>
              <p>{`${euro.pctChange} %`}</p>
              <p>{`R$ ${euro.bid}`}</p>        
              <p><small>{`Min. R$ ${euro.low} / Max. R$ ${euro.high}`}</small></p>
            </span>
          </div>
          <div class="coluna-33">
          <span>
              <h4>{`${libra.name}`}</h4>
              <p>{`${libra.pctChange} %`}</p>
              <p>{`R$ ${libra.bid}`}</p>        
              <p><small>{`Min. R$ ${libra.low} / Max. R$ ${libra.high}`}</small></p>
            </span>
          </div>
        </div>
        <hr />
        <div class="linha">
          <div class="coluna-33">
              <span class="align-baseline">
                <h4>{`${peso.name}`}</h4>
                <p>{`${peso.pctChange} %`}</p>
                <p>{`R$ ${peso.bid}`}</p>        
                <p><small>{`Min. R$ ${peso.low} / Max. R$ ${peso.high}`}</small></p>
            </span>
          </div>
          <div class="coluna-33">
            <span>
              <h4>{`${iene.name}`}</h4>
              <p>{`${iene.pctChange} %`}</p>
              <p>{`R$ ${iene.bid}`}</p>        
              <p><small>{`Min. R$ ${iene.low} / Max. R$ ${iene.high}`}</small></p>
            </span>
          </div>
          <div class="coluna-33">
          <span>
              <h4>{`${franco.name}`}</h4>
              <p>{`${franco.pctChange} %`}</p>
              <p>{`R$ ${franco.bid}`}</p>        
              <p><small>{`Min. R$ ${franco.low} / Max. R$ ${franco.high}`}</small></p>
            </span>
          </div>
        </div>
        <hr />
        <div class="linha">
          <div class="coluna-33">
              <span class="align-baseline">
                <h4>{`${bitcoin.name}`}</h4>
                <p>{`${bitcoin.pctChange} %`}</p>
                <p>{`R$ ${bitcoin.bid}`}</p>        
                <p><small>{`Min. R$ ${bitcoin.low} / Max. R$ ${bitcoin.high}`}</small></p>
            </span>
          </div>
          <div class="coluna-33">
            <span>
              <h4>{`${litecoin.name}`}</h4>
              <p>{`${litecoin.pctChange} %`}</p>
              <p>{`R$ ${litecoin.bid}`}</p>        
              <p><small>{`Min. R$ ${litecoin.low} / Max. R$ ${litecoin.high}`}</small></p>
            </span>
          </div>
          <div class="coluna-33">
          <span>
              <h4>{`${etherium.name}`}</h4>
              <p>{`${etherium.pctChange} %`}</p>
              <p>{`R$ ${etherium.bid}`}</p>        
              <p><small>{`Min. R$ ${etherium.low} / Max. R$ ${etherium.high}`}</small></p>
            </span>
          </div>
        </div>
        
    </div>
  );
}
