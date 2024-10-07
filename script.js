import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";


const firebaseConfig = {
  databaseURL: "https://bdtrabalhos-default-rtdb.firebaseio.com",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const data = getDatabase(app);
const referencia = ref(data)

onValue(referencia, (res) => {
  const dataBD = res.val();
  mostraInformacaos(dataBD);
})


const terminoDeContrato = (value) => value ? " - " + value : " ";

function informacaoPessoal(dados) {
  return ` 
    ${dados.name}
    <span class="texto--block">${dados.age} anos</span>
    <span class="texto--block texto titulo--secundario">ONEhellper</span>
  `
}

function trabalhosRegistrados(dados) {
  return dados.trabalhos.map(({ empresa, ocupacao, admissao, recisaoContratual }) => {
    return `
      <li class="texto">
        <span class="titulo--secundario">
          ${empresa} ( ${admissao} ${terminoDeContrato(recisaoContratual)} )
        </span> - ${ocupacao}
      </li>
    `
  }).join("")
}

function mostraInformacaos(dados){
  document.querySelector('[data-info="eu"]').innerHTML = informacaoPessoal(dados);
  document.querySelector('[data-info="trabalhos"]').innerHTML += `
    <ul>
      ${trabalhosRegistrados(dados)}
    </ul>
  `
}

