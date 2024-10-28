import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";


const firebaseConfig = {
  databaseURL: "https://bdtrabalhos-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const data = getDatabase(app);
const referencia = ref(data);

onValue(referencia, (res) => {
  const dataBD = res.val();
  mostraInformacaos(dataBD);
})


const terminoDeContrato = (value) => value ? " - " + value : " ";

function informacaoPessoal(dados) {
  return ` 
    ${dados.name},
    <span class="curriculo__espacamento texto--block">${dados.age} anos</span>
    <span class="texto--block texto secundario--alternativo cor--elemento">ONEhellper</span>
  `
}

function cursosFeitos(dados) {
  return dados.cursos.map(({name, link}) => {
    return `
      <li class="curriculo__espacamento texto">
        <a class="cor--destaque" target="_blank" href="${link}"> -> ${name} </a>
      </li>
    `
  }).join("")
}

function trabalhosRegistrados(dados) {
  return dados.trabalhos.map(({ empresa, ocupacao, admissao, recisaoContratual }) => {
    return `
      <li class="curriculo__espacamento">
        <span class="cor--elemento">
          ${empresa} ( ${admissao} ${terminoDeContrato(recisaoContratual)} )
        </span> - ${ocupacao}
      </li>
    `
  }).join("")
}

function mostraInformacaos(dados){
  document.querySelector('[data-info="eu"]').innerHTML = informacaoPessoal(dados);

  document.querySelector('[data-info="cursos"]').innerHTML += `
    <ul class="curriculo__texto">
      ${cursosFeitos(dados)}
    </ul>
  `
  document.querySelector('[data-info="trabalhos"]').innerHTML += `
    <ul>
      ${trabalhosRegistrados(dados)}
    </ul>
  `
}

