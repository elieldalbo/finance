// cSpell:Ignore obtem

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [economia, setEconomia] = useState([])

  useEffect (() => {
    document.title = 'Finance Quotation'
  },[])

  async function obtemDados(){
    setEconomia([])
    //setCarregando(true)
    //const filtraEtnia = etnia.length > 0 ? `&ethnicity=${etnia}` : ''
    //const filtraIdade = idade.length > 0 ? `&age=${idade}` : ''
    let url = `https://economia.awesomeapi.com.br/json/all`
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      const uri = data
      console.log(data.USD)
      uri && setEconomia(data.USD)
    })
    .catch(function (error){
      console.error('Houve um problema ao efetuar a requisição: ' + error.message)
    })
    //setCarregando(false)
  }

  function ListaDados(props) {
    const economia = props.data
    const listagemDados = economia.map((moeda) => 
      <p>{moeda.name}</p>
    );
    return (
    <ul>{listagemDados}</ul>
    );
}

  return (
    <div className="App">
        <p>Teste App</p>
        {economia.length > 0
        ? <ListaDados economia={economia.USD} />
        :  <p>Erro ao carregar os dados</p>
        }
        <button type="button" onClick={obtemDados}>
        Finance Quotation
      </button>

    </div>
  )
}

export default App;
