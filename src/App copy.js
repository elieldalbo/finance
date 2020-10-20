// cSpell:Ignore obtem

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [economia, setEconomia] = useState([])

  useEffect (() => {
    document.title = 'Finance Quotation'
    obtemDados()
  },[])

  async function obtemDados(){
    setEconomia([])
    let url = `https://economia.awesomeapi.com.br/json/all`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setEconomia(data)
    })
    .catch(function (error){
      console.error(`Houve um erro: ${error}`)
    })
  }
  
  function ListaMoedas() {
     const listagemMoedas =  economia.map((moeda) =>
        <div key={moeda.code}>
          <ul>{moeda.pctChange + '%'}</ul>
          <ul>{'R$' + moeda.bid + ' ' + moeda.code + ' / ' + moeda.codein}</ul>
          <ul>{moeda.name}</ul>
          <ul>{moeda.low + ' / ' + moeda.high}</ul>
        </div>
    )

    return (
    <ul>{listagemMoedas}</ul>
    );
}

  return (
    <div className="App">
        <h1>Finance Quotation</h1>
        <div className="moedas" id="resultado" >
        {economia.length > 0 ? 'Não há dados para exibir' : <ListaMoedas economia={economia} /> }
        </div>
    </div>
  );
}

export default App;
