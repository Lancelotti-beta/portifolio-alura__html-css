(() => {

document.querySelector('h1').innerHTML = "";

async function mostraInformacaos(){
    await fetch("./info.json", { method : "GET" })
      .then((resposta) => resposta.json())
      .then((dados) => {
        document.querySelector('[data-info="eu"]').innerHTML = `
          ${dados.name}
          <span class="texto--block">${dados.age} anos</span>
          <span class="texto--block titulo--secundario">ONEhellper</span>
        `;
        document.querySelector('[data-info="trabalhos"]').innerHTML = `
          <ul>
            ${dados
              .trabalhos
              .map(({empresa, cargo, dataInicio, dataFinal}) => {
              return `
                <li class="texto">
                  <span class="titulo--secundario">
                    ${empresa} ( ${dataInicio} ${null? ' - . . .' :  ' - ' dataFinal} )
                  </span> - ${cargo}
                </li>
              `})
            }
          </ul>
        `;
      });
      

}

mostraInformacaos();
})()

