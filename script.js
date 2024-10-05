const terminoDeContrato = (value) => null ? " - . ." : " - " + value;

function informacaoPessoal(dados) {
  return ` 
    ${dados.name}
    <span class="texto--block">${dados.age} anos</span>
    <span class="texto--block titulo--secundario">ONEhellper</span>
  `
}

function trabalhosRegistrados(dados) {
  dados.trabalhos.map(({ empresa, cargo, dataInicio, dataFinal }) => {
    return `
    <li class="texto">
    <span class="titulo--secundario">
    ${empresa} ( ${dataInicio} ${terminoDeContrato(dataFinal)} )
        </span> - ${cargo}
      </li>
    `
  })
}

async function mostraInformacaos(){
  await fetch("https://bdtrabalhos-default-rtdb.firebaseio.com/")
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      document.querySelector('[data-info="eu"]').innerHTML = informacaoPessoal(dados);
      document.querySelector('[data-info="trabalhos"]').innerHTML = `
        <ul>
          ${trabalhosRegistrados(dados)}
        </ul>
      `
    })
}

mostraInformacaos()