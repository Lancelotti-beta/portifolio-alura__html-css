mostraInformacaos("./info.json");

async function mostraInformacaos(url){
    await fetch(url)
      .then((resposta) => resposta.json)
      .then((dados) => {
        document.querySelector('data-info="eu"').innerHTML =
        `
          ${name}
          <span class="texto--block">${age} anos</span>
          <span class="texto--block titulo--secundario">ONEhellper</span>
        `
      });

}

